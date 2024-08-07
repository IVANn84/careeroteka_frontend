import { NavLink } from 'react-router-dom';
import React from 'react';

import RightHeaderNavigation from './components/RightHeaderNavigation';

export default function Header({
  classes,
}) {
  return (
    <header className={classes.container}>
      <div className={classes.leftSideContainer}>
        <NavLink
          className={classes.title}
          exact
          to="/"
        >
          careeroteka
        </NavLink>
      </div>
      <RightHeaderNavigation />
    </header>
  );
}
