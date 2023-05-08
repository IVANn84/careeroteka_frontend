import React from 'react';
import accounting from 'accounting-big';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

import { useStoreMainPage } from 'Page/Main/stores';
import { getNoun } from 'Util/getNoun';

import Typography from 'Component/Typography';
import ListSkeleton from './components/ListSkeleton';

export default function ProfessionList({
  classes,
}) {
  const {
    professionsStore,
  } = useStoreMainPage();

  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '',
    precision: 0,
    thousand: ' ',
  });

  const getDirectionNoun = count => getNoun(count, ['специальность', 'специальности', 'специальностей']);

  return (
    <div className={classes.container}>
      {professionsStore.isLoading
        ? (
          <div className={classes.professionsContainer}>
            <ListSkeleton isDisplayed />
          </div>
        )
        : (
          <InfiniteScroll
            className={classes.infiniteScroll}
            dataLength={professionsStore.values.length}
            next={() => professionsStore.fetchProfessions(true)}
            hasMore={!professionsStore.isLoading && !!professionsStore.nextPage}
            loader={null}
            scrollThreshold="600px"
          >
            <div className={classes.professionsContainer}>
              {professionsStore.values.length
                ? (
                  <>
                    {professionsStore.values.map(({
                      id,
                      name,
                      salaryMinValue,
                      countDirections,
                    }) => (
                      <Link
                        key={id}
                        to={`/professions/${id}`}
                        tabIndex={0}
                        className={classes.professionItem}
                      >
                        <div className={classes.professionTitle}>
                          <Typography
                            variant="B1"
                            variantMobile="B1"
                            weight="semiBold"
                            weightMobile="semiBold"
                            component="p"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="B2"
                            variantMobile="B2"
                          >
                            {countDirections}
                            {' '}
                            {getDirectionNoun(countDirections)}
                          </Typography>
                        </div>
                        <Typography
                          variant="H5"
                          variantMobile="H5"
                          className={classes.professionMinSalary}
                          component="p"
                        >
                          от
                          {' '}
                          {formatMoney(salaryMinValue)}
                          {' '}
                          ₽
                        </Typography>
                      </Link>
                    ))}
                    <ListSkeleton isDisplayed={professionsStore.isLoadingNext} />
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
