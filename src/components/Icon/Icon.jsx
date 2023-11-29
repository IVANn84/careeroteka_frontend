import React from 'react';

import WorldBag from './icons/WorldBag.jsx';
import Vk from './icons/Vk.jsx';
import Telegram from './icons/Telegram.jsx';
import TechScience from './icons/TechScience.jsx';
import SearchPeopleInside from './icons/SearchPeopleInside.jsx';
import Rocket from './icons/Rocket.jsx';
import Remote from './icons/Remote.jsx';
import Graduate from './icons/Graduate.jsx';
import Freelance from './icons/Freelance.jsx';
import Cookie from './icons/Cookie.jsx';
import CompanyHouse from './icons/CompanyHouse.jsx';

// Иконка
export default function Icon({
  name,
  width = 24,
  height = 24,
  ...props
}) {
  // eslint-disable-next-line default-case
  switch (name) {
    case 'telegram':
      return (
        <Telegram
          height={height}
          width={width}
          {...props}
        />
      );

    case 'vk':
      return (
        <Vk
          height={height}
          width={width}
          {...props}
        />
      );

    case 'searchPeopleInside':
      return (
        <SearchPeopleInside
          height={height}
          width={width}
          {...props}
        />
      );

    case 'companyHouse':
      return (
        <CompanyHouse
          height={height}
          width={width}
          {...props}
        />
      );

    case 'rocket':
      return (
        <Rocket
          height={height}
          width={width}
          {...props}
        />
      );

    case 'techScience':
      return (
        <TechScience
          height={height}
          width={width}
          {...props}
        />
      );

    case 'freelance':
      return (
        <Freelance
          height={height}
          width={width}
          {...props}
        />
      );

    case 'remote':
      return (
        <Remote
          height={height}
          width={width}
          {...props}
        />
      );

    case 'cookie':
      return (
        <Cookie
          height={height}
          width={width}
          {...props}
        />
      );

    case 'worldBag':
      return (
        <WorldBag
          height={height}
          width={width}
          {...props}
        />
      );

    case 'graduate':
      return (
        <Graduate
          height={height}
          width={width}
          {...props}
        />
      );
  }
}
