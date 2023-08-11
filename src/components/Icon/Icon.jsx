import React from 'react';

import Freelance from './icons/Freelance.jsx';
import Remote from './icons/Remote.jsx';
import Telegram from './icons/Telegram.jsx';
import Vk from './icons/Vk.jsx';
import SearchPeopleInside from './icons/SearchPeopleInside.jsx';
import CompanyHouse from './icons/CompanyHouse.jsx';
import Rocket from './icons/Rocket.jsx';
import TechScience from './icons/TechScience.jsx';
import Cookie from './icons/Cookie.jsx';
import WorldBag from './icons/WorldBag.jsx';
import Graduate from './icons/Graduate.jsx';

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
          width={width}
          height={height}
          {...props}
        />
      );

    case 'vk':
      return (
        <Vk
          width={width}
          height={height}
          {...props}
        />
      );

    case 'searchPeopleInside':
      return (
        <SearchPeopleInside
          width={width}
          height={height}
          {...props}
        />
      );

    case 'companyHouse':
      return (
        <CompanyHouse
          width={width}
          height={height}
          {...props}
        />
      );

    case 'rocket':
      return (
        <Rocket
          width={width}
          height={height}
          {...props}
        />
      );

    case 'techScience':
      return (
        <TechScience
          width={width}
          height={height}
          {...props}
        />
      );

    case 'freelance':
      return (
        <Freelance
          width={width}
          height={height}
          {...props}
        />
      );

    case 'remote':
      return (
        <Remote
          width={width}
          height={height}
          {...props}
        />
      );

    case 'cookie':
      return (
        <Cookie
          width={width}
          height={height}
          {...props}
        />
      );

    case 'worldBag':
      return (
        <WorldBag
          width={width}
          height={height}
          {...props}
        />
      );

    case 'graduate':
      return (
        <Graduate
          width={width}
          height={height}
          {...props}
        />
      );
  }
}
