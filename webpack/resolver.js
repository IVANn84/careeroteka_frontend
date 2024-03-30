const path = require("path");
const fs = require("fs");

const resolverCache = {};
const WHITELABEL_DIR_NAME = "__whitelabel__";

const convertToWhiteLabelPath = (filePath, brand) => {
  return path.join(
    path.dirname(filePath),
    WHITELABEL_DIR_NAME,
    path.basename(filePath) + `.${brand}`
  );
};

const ensureExtension = (filePath) => {
  return filePath + ".tsx";
};

const CustomResolver = (brand) => ({
  apply: function (resolver) {
    const target = resolver.ensureHook("resolve");

    resolver
      .getHook("resolve")
      .tapAsync("ThemeResolverPlugin", (request, resolveContext, callback) => {
        const filePath = path.join(request.path, request.request);
        const swap = (overwrites) => {
          const newRequest = Object.assign({}, request, overwrites);
          console.log(
            `[Whitelabel] ${path.basename(
              request.request
            )} swapped with ${WHITELABEL_DIR_NAME}/${path.basename(
              newRequest.request
            )}`
          );
          resolver.doResolve(
            target,
            newRequest,
            null,
            resolveContext,
            callback
          );
        };

        if (filePath.indexOf("node_modules") < 0) {
          if (resolverCache[filePath]) {
            swap(resolverCache[filePath]);
            return;
          }
          const brandedFilePath = convertToWhiteLabelPath(filePath, brand);
          const exists = fs.existsSync(ensureExtension(brandedFilePath));
          if (exists) {
            resolverCache[filePath] = {
              path: path.dirname(brandedFilePath),
              request: "./" + path.basename(brandedFilePath),
            };
            swap(resolverCache[filePath]);
            return;
          }
        }
        callback();
      });
  },
});

module.exports = {
  CustomResolver,
};
