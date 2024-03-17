import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';
import accounting from 'accounting-big';

import { getNoun } from 'Util/getNoun';
import { useStoreMainPage } from 'Page/Main/stores';
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
            hasMore={!professionsStore.isLoading && !!professionsStore.nextPage}
            loader={null}
            next={() => professionsStore.fetchProfessions(true)}
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
                        className={classes.professionItem}
                        key={id}
                        tabIndex={0}
                        to={`/professions/${id}`}
                      >
                        <div className={classes.professionTitle}>
                          <Typography
                            component="p"
                            variant="B1"
                            variantMobile="B1"
                            weight="semiBold"
                            weightMobile="semiBold"
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
                          className={classes.professionMinSalary}
                          component="p"
                          variant="H5"
                          variantMobile="H5"
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
