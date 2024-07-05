import React from 'react';

// import Divider from 'Component/Divider';

import WorkFormat from './components/WorkFormat';
// import EmploymentFormats from './components/EmploymentFormat';
// import EmployabilityFormats from './components/ContractType';
// import CompanySizes from './components/CompanySize';

export default function Other({
  classes,
}) {
  return (
    <div className={classes.container}>
      <WorkFormat />
      {/* <EmploymentFormats /> */}
      {/* <EmployabilityFormats /> */}
      {/* <CompanySizes /> */}
      {/* <Divider /> */}
    </div>
  );
}
