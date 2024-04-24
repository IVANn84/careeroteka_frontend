import { flow, types } from 'mobx-state-tree';

import { fieldsStoreMainPage } from 'Page/Main/stores/fields';
import ProfessionApi from 'Api/profession';

const ProfessionModel = types.model('Profession', {
  id: types.number,
  name: types.string,
  salaryMinValue: types.number,
  countDirections: types.number,
});

export const ProfessionsStoreModel = types
  .model('Professions', {
    isLoading: types.optional(types.boolean, true),
    isLoadingNext: types.optional(types.boolean, false),
    values: types.optional(types.array(ProfessionModel), []),
    nextPage: types.maybeNull(types.number),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setIsLoadingNext(value) {
      self.isLoadingNext = value;
    }

    function setValues(value) {
      self.values = value;
    }

    function setNextPage(value) {
      self.nextPage = value;
    }

    const fetchProfessions = flow(function* (isFetchNextPage?: boolean) {
      if (isFetchNextPage) {
        setIsLoadingNext(true);
      } else {
        setIsLoading(true);
      }

      const {
        searchProfession,
        areaId,
      } = fieldsStoreMainPage;

      const { data, errors } = yield ProfessionApi.FetchList({
        search: searchProfession,
        areas__id: areaId,
        page: isFetchNextPage
          ? self.nextPage
          : null,
      });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setValues(isFetchNextPage
          ? [...self.values, ...data.results]
          : data.results);
        setNextPage(data.next);
      }

      if (isFetchNextPage) {
        setIsLoadingNext(false);
      } else {
        setIsLoading(false);
      }
    });

    return {
      setIsLoading,
      setIsLoadingNext,
      setValues,
      setNextPage,
      fetchProfessions,
    };
  });

export const professionsStoreMainPage = ProfessionsStoreModel.create();
