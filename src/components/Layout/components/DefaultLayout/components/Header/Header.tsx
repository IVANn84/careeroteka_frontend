import { NavLink } from 'react-router-dom';
import React from 'react';

import { useStoreLayoutComponent } from 'Component/Layout/stores';

import RightHeaderNavigation from './components/RightHeaderNavigation';
import LeftHeaderNavigation from './components/LeftHeaderNavigation';

const isCareeroteka = window.theme.title.name === 'careeroteka';

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
          to={window.theme.title.link}
        >
          {window.theme.title.name}
        </NavLink>
        {isCareeroteka && <LeftHeaderNavigation />}
      </div>
      {!isLoading && isCareeroteka && (
        <RightHeaderNavigation />
      )}
    </div>
  );
}
