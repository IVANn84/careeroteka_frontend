import React from 'react';

import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';

import WorkFormat from './components/WorkFormat';
// import EmploymentFormats from './components/EmploymentFormat';
// import EmployabilityFormats from './components/ContractType';
// import CompanySizes from './components/CompanySize';

export default function Other({ classes }) {
  const device = useDevice();

  return (
    <div className={classes.container}>
      {device === 'desktop' && (
        <Typography
          component="p"
          variant="H5"
          variantMobile="B1"
          weightMobile="semiBold"
        >
          Другие характеристики
        </Typography>
      )}
      <WorkFormat />
      {/* <EmploymentFormats /> */}
      {/* <EmployabilityFormats /> */}
      {/* <CompanySizes /> */}
    </div>
  );
}
