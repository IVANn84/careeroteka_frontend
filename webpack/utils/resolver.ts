/* eslint-disable no-console */
import type { Resolver } from 'webpack';

import path from 'path';
import fs from 'fs';

interface ResolverCache {
  path: string;
  request: string;
}

const resolverCache: { [key: string]: ResolverCache } = {};
export const WHITELABEL_DIR_NAME = '__whitelabel__';

const convertToWhiteLabelPath = (filePath: string, brand: string) => path.join(
  path.dirname(filePath),
  WHITELABEL_DIR_NAME,
  `${path.basename(filePath)}.${brand}`,
);

const fileExists = (filePath: string) => fs.existsSync(`${filePath}.tsx`) || fs.existsSync(`${filePath}.ts`);

export const CustomResolver = (brand?: string) => ({
  apply(resolver: Resolver) {
    const target = resolver.ensureHook('resolve');

    resolver
      .getHook('resolve')
      .tapAsync('ThemeResolverPlugin', (request, resolveContext, callback) => {
        const filePath = path.join(request.path as string, request.request);
        const swap = (overwrites: ResolverCache) => {
          const newRequest = { ...request, ...overwrites };
          console.log(
            `[Whitelabel] ${path.basename(
              request.request,
            )} swapped with ${WHITELABEL_DIR_NAME}/${path.basename(
              newRequest.request,
            )}`,
          );
          resolver.doResolve(
            target,
            newRequest,
            null,
            resolveContext,
            callback,
          );
        };

        if (!filePath.includes('node_modules')) {
          if (resolverCache[filePath]) {
            swap(resolverCache[filePath]);
            return;
          }
          const brandedFilePath = convertToWhiteLabelPath(filePath, brand);
          if (fileExists(brandedFilePath)) {
            resolverCache[filePath] = {
              path: path.dirname(brandedFilePath),
              request: `./${path.basename(brandedFilePath)}`,
            };
            swap(resolverCache[filePath]);
            return;
          }
        }

        callback();
      });
  },
});
