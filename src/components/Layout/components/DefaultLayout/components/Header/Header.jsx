import React from 'react';
import { NavLink } from 'react-router-dom';

import { useStoreLayoutComponent } from 'Component/Layout/stores';
import HeaderNavigation from './components/HeaderNavigation';

export default function Header({
  classes,
}) {
  const {
    isLoading,
  } = useStoreLayoutComponent();

  return (
    <div className={classes.container}>
      <NavLink
        className={classes.title}
        to="/"
        exact
      >
        careeroteka
      </NavLink>
      {!isLoading && (
        <HeaderNavigation />
      )}
    </div>
  );
}
