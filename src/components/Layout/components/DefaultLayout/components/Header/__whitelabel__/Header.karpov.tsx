import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Header({ classes }) {
  return (
    <div className={classes.container}>
      <NavLink className={classes.title} exact to="/vacancies">
        karpov courses
      </NavLink>
    </div>
  );
}
