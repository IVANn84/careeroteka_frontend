import { Instance } from 'mobx-state-tree';

import { RootStoreModel } from './index';

export type RootStoreType = Instance<typeof RootStoreModel>;
