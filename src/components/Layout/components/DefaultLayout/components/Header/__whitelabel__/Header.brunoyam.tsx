import { NavLink } from 'react-router-dom';
import React from 'react';

import { useStoreLayoutComponent } from 'Component/Layout/stores';

import RightHeaderNavigation from '../components/RightHeaderNavigation';

interface Props {
  classes: {[className: string]: string};
  // eslint-disable-next-line react/no-unused-prop-types
  variant?: 'blacktitle' | 'whitetitle';
}

export default function Header({
  classes,
}: Props) {
  const {
    isLoading,
  } = useStoreLayoutComponent();

  return (
    <div className={classes.container}>
      <div className={classes.leftSideContainer}>
        <NavLink
          className={classes.title}
          exact
          to="/"
        >
          бруноям
        </NavLink>
      </div>
      {!isLoading && (
        <RightHeaderNavigation />
      )}
    </div>
  );
}
