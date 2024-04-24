import { types } from 'mobx-state-tree';

import actions from './actions';

export const LikeModel = types
  .model('LikeModel', {
    user: types.number,
    course: types.number,
  });

export const RootStoreModel = types
  .model('Root', {
    isLoading: types.optional(types.boolean, true),
    isLoadingLike: types.map(types.boolean),
    likeList: types.optional(types.array(LikeModel), []),
  })
  .actions(actions);

export const rootStoreCoursesSliderComponent = RootStoreModel.create();
