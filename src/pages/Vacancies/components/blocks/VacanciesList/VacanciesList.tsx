import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useMemo } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';

import Vacancy from './components/Vacancy';
import ListSkeleton from './components/ListSkeleton';

export default function VacanciesList({
  classes,
}) {
  const {
    vacanciesStore, partnersStore,
  } = useStoreVacanciesPage();

  const banner = useMemo(() => {
    const path = partnersStore.values[0]?.image;
    const minCountVacancies = 7;
    if (vacanciesStore.values.length > minCountVacancies && path) {
      return (
        <div
          className={classes.banner}
          style={{ backgroundImage: `url(${path})` }}
        />
      );
    }
    return null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vacanciesStore.values, partnersStore.values[0]?.image]);

  return (
    <div className={classes.container}>
      {vacanciesStore.isLoading
        ? (
          <div className={classes.vacanciesContainer}>
            <ListSkeleton isDisplayed />
          </div>
        )
        : (
          <InfiniteScroll
            className={classes.infiniteScroll}
            dataLength={vacanciesStore.values.length}
            hasMore={!vacanciesStore.isLoading && !!vacanciesStore.nextPage}
            loader={null}
            next={() => vacanciesStore.fetchVacancies(true)}
            scrollThreshold="600px"
          >
            <div className={classes.vacanciesContainer}>
              {banner}
              {vacanciesStore.values.length
                ? (
                  <>
                    {vacanciesStore.values.map(vacancy => (
                      <Vacancy
                        key={vacancy.id}
                        value={vacancy}
                      />
                    ))}
                    <ListSkeleton isDisplayed={vacanciesStore.isLoadingNext} />
                  </>
                )
                : (
                  <Typography
                    variant="B1"
                    variantMobile="B1"
                  >
                    Ничего не найдено
                  </Typography>
                )}
            </div>
          </InfiniteScroll>
        )}
    </div>
  );
}
