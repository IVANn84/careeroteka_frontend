import React from 'react';
import accounting from 'accounting-big';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';

export default function Vacancy({
  value: {
    id,
    company,
    vacancyAggregators,
    name,
    city,
    salary,
    isRead,
  },

  classes,
}) {
  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '',
    precision: 0,
    thousand: ' ',
  });

  return (
    <Link
      key={id}
      to={`/vacancies/${id}`}
      tabIndex={0}
      className={classes.container}
    >
      <div className={classes.title}>
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          {company}
        </Typography>
        <div className={classes.aggregators}>
          {vacancyAggregators.map(({
            id: aggregatorId,
            icon: aggregatorIcon,
            name: aggregatorName,
          }) => (
            <img
              src={aggregatorIcon}
              alt={aggregatorName}
              key={aggregatorId}
            />
          ))}
        </div>
      </div>
      <Typography
        variant="B1"
        variantMobile="B1"
        weight="semiBold"
        weightMobile="semiBold"
        component="p"
        className={classes.name}
      >
        {name}
      </Typography>
      <div className={classes.info}>
        <div>
          <Typography
            variant="C1"
            variantMobile="C1"
            className={classes.city}
            component="p"
          >
            {city}
          </Typography>
          <Typography
            variant="C1"
            variantMobile="C1"
            className={classes.salary}
            component="p"
          >
            от
            {' '}
            {formatMoney(salary)}
            {' '}
            ₽
          </Typography>
        </div>
        <div className={classes.check}>
          <CheckIcon />
          {isRead && (
            <CheckIcon />
          )}
        </div>
      </div>
    </Link>
  );
}
