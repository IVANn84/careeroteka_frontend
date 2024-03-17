import { Link } from 'react-router-dom';
import React from 'react';
import accounting from 'accounting-big';
import { CheckIcon } from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';

export default function Vacancy({
  value: {
    id, company, name, city, salary, isRead,
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
      salaryString = `${
        salary.minValue ? `от ${formatMoney(salary.minValue)} ` : ''
      } ${salary.maxValue ? `до ${formatMoney(salary.maxValue)} ` : ''}`;
    } else {
      salaryString = `${formatMoney(salary.minValue ?? salary.maxValue)} `;
    }
  }

  return (
    <Link
      className={classes.container}
      key={id}
      tabIndex={0}
      to={`/vacancies/${id}`}
    >
      <div className={classes.title}>
        <abbr title={company}>
          <Typography className={classes.company} variant="B2" variantMobile="B2">
            {company}
          </Typography>
        </abbr>
        <div className={classes.check}>
          <CheckIcon />
          {isRead && <CheckIcon />}
        </div>
      </div>
      <abbr title={name}>
        <Typography
          className={classes.name}
          component="p"
          variant="B1"
          variantMobile="B2"
          weight="semiBold"
          weightMobile="semiBold"
        >
          {name}
        </Typography>
      </abbr>
      <div className={classes.info}>
        {city && (
          <Typography
            className={classes.city}
            component="p"
            variant="C1"
            variantMobile="C1"
          >
            {city}
          </Typography>
        )}
        {salary && (
          <Typography
            className={classes.salary}
            component="p"
            variant="C1"
            variantMobile="C1"
          >
            {`${salaryString}${salary.currency.code}`}
          </Typography>
        )}
      </div>
    </Link>
  );
}
