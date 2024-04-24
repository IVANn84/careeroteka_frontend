import { NavLink } from 'react-router-dom';
import React from 'react';

import { useStoreLayoutComponent } from 'Component/Layout/stores';

import RightHeaderNavigation from './components/RightHeaderNavigation';
import LeftHeaderNavigation from './components/LeftHeaderNavigation';

export default function Header({
  classes,
}) {
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
          careeroteka
        </NavLink>
        <LeftHeaderNavigation />
      </div>
      {!isLoading && (
        <RightHeaderNavigation />
      )}
    </div>
  );
}
