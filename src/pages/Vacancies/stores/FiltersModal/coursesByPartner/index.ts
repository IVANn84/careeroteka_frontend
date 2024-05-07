import { flow, types } from 'mobx-state-tree';

import CoursesByPartnerApi from 'Api/courses-by-partner';

const CourseByPartnerModel = types.model('CourseByPartner', {
  id: types.number,
  name: types.maybeNull(types.string),
  company: types.maybeNull(types.string),
  type: types.maybeNull(types.string),
  image: types.maybeNull(types.string),
  rating: types.maybeNull(types.number),
});

export const FiltersModalCoursesByPartnerStoreModel = types
  .model('CoursesByPartner', {
    isLoading: types.optional(types.boolean, true),
    isLoadingNext: types.optional(types.boolean, false),
    values: types.optional(types.array(CourseByPartnerModel), []),
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

    const fetchCoursesByPartner = flow(function* (isFetchNextPage?: boolean) {
      if (isFetchNextPage) {
        setIsLoadingNext(true);
      } else {
        setIsLoading(true);
      }

      const { data, errors } = yield CoursesByPartnerApi.FetchList({
        page: isFetchNextPage
          ? self.nextPage
          : null,
      });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        const courses = data.results;

        setValues(isFetchNextPage
          ? [...self.values, ...courses]
          : courses);
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
      fetchCoursesByPartner,
    };
  });

export const filtersModalCoursesByPartnerVacanciesPage = FiltersModalCoursesByPartnerStoreModel
  .create();
