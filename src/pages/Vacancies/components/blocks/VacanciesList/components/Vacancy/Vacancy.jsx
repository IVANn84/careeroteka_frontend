import React from 'react';
import accounting from 'accounting-big';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';

export default function Vacancy({
  value: {
    id,
    company,
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

  let salaryString;

  if (salary) {
    if (salary.minValue !== salary.maxValue) {
      salaryString = `${salary.minValue
        ? `от ${formatMoney(salary.minValue)} `
        : ''} ${salary.maxValue
        ? `до ${formatMoney(salary.maxValue)} `
        : ''}`;
    } else {
      salaryString = `${formatMoney(salary.minValue ?? salary.maxValue)} `;
    }
  }

  return (
    <Link
      key={id}
      to={`/vacancies/${id}`}
      tabIndex={0}
      className={classes.container}
    >
      <abbr title={company}>
        <Typography
          variant="B2"
          variantMobile="B2"
          className={classes.company}
        >
          {company}
        </Typography>
      </abbr>
      <abbr title={name}>
        <Typography
          variant="B1"
          variantMobile="B2"
          weight="semiBold"
          weightMobile="semiBold"
          component="p"
          className={classes.name}
        >
          {name}
        </Typography>
      </abbr>
      <div className={classes.info}>
        <div className={classes.conditions}>
          {city && (
            <Typography
              variant="C1"
              variantMobile="C1"
              className={classes.city}
              component="p"
            >
              {city}
            </Typography>
          )}
          {salary && (
            <Typography
              variant="C1"
              variantMobile="C1"
              className={classes.salary}
              component="p"
            >
              {`${salaryString}${salary.currency.code}`}
            </Typography>
          )}
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
