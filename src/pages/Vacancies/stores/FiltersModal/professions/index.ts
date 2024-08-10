import { flow, types } from 'mobx-state-tree';

import ProfessionsApi from 'Api/profession';

const ProfessionsModel = types.model('Professions', {
  id: types.number,
  name: types.maybeNull(types.string),
  salaryMinValue: types.maybeNull(types.string),
  countDirections: types.maybeNull(types.string),
});

export const FiltersModalProfessionsStoreModel = types
  .model('CoursesByPartner', {
    isLoading: types.optional(types.boolean, true),
    isLoadingNext: types.optional(types.boolean, false),
    values: types.optional(types.array(ProfessionsModel), []),
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

      const { data, errors } = yield ProfessionsApi.FetchList({
        page: isFetchNextPage
          ? self.nextPage
          : null,
      });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        const professions = data.results;

        setValues(isFetchNextPage
          ? [...self.values, ...professions]
          : professions);
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

export const filtersModalProfessionsVacanciesPage = FiltersModalProfessionsStoreModel
  .create();
