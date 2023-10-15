import React from 'react';

import Divider from 'Component/Divider';

import WorkFormats from './components/WorkFormats';
import EmploymentFormats from './components/EmploymentFormats';

export default function Other({
  classes,
}) {
  return (
    <div className={classes.container}>
      <WorkFormats />
      <EmploymentFormats />
      <Divider />
    </div>
  );
}
