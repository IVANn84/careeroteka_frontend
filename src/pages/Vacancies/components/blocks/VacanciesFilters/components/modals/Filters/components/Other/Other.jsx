import React from 'react';

import Divider from 'Component/Divider';

import WorkFormats from './components/WorkFormats';
import EmploymentFormats from './components/EmploymentFormats';
import EmployabilityFormats from './components/EmployabilityFormats';
import CompanySizes from './components/CompanySizes';

export default function Other({
  classes,
}) {
  return (
    <div className={classes.container}>
      <WorkFormats />
      <EmploymentFormats />
      <EmployabilityFormats />
      <CompanySizes />
      <Divider />
    </div>
  );
}
