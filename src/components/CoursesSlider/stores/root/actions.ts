import { applySnapshot, flow, getSnapshot } from 'mobx-state-tree';

import { rootStoreLayoutComponent } from 'Component/Layout/stores/root';
import FavoriteApi from 'Api/favorite';

let initialState = {};

export default self => ({
  afterCreate() {
    initialState = getSnapshot(self);
  },

  reset() {
    applySnapshot(self, initialState);
  },

  setIsLoading(value) {
    self.isLoading = value;
  },

  setIsLoadingLike(id, value) {
    self.isLoadingLike.set(id, value);
  },

  setLikeList(value) {
    self.likeList = value;
  },

  toggleLike: flow(function* (id) {
    const isExist = self.likeList.some(item => item.course === id);
    self.setIsLoadingLike(id, true);

    if (isExist) {
      const { errors } = yield FavoriteApi.Delete(id);

      if (!errors) {
        self.setLikeList(self.likeList.filter(item => item.course !== id));
      }
    } else {
      const { errors } = yield FavoriteApi.Add(id);

      if (!errors && rootStoreLayoutComponent.currentUser) {
        self.setLikeList([...self.likeList, {
          course: id,
          user: rootStoreLayoutComponent.currentUser.id,
        }]);
      }
    }

    self.setIsLoadingLike(id, false);
  }),

  fetchLikeList: flow(function* () {
    self.setIsLoading(true);

    const { errors, data } = yield FavoriteApi.FetchList();

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
      self.setError(errors || 'Неизвестная ошибка');
    } else if (data) {
      self.setLikeList(data);
    }

    self.setIsLoading(false);
  }),
});
