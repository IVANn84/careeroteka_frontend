import React, { SVGAttributes } from 'react';

import WorldBag from './icons/WorldBag';
import Vk from './icons/Vk';
import Telegram from './icons/Telegram';
import TechScience from './icons/TechScience';
import SearchPeopleInside from './icons/SearchPeopleInside';
import Rocket from './icons/Rocket';
import Remote from './icons/Remote';
import Graduate from './icons/Graduate';
import Freelance from './icons/Freelance';
import Cookie from './icons/Cookie';
import CompanyHouse from './icons/CompanyHouse';

export interface IconProps extends SVGAttributes<SVGElement> {
  name: 'vk' |
    'telegram' |
    'searchPeopleInside' |
    'companyHouse' |
    'rocket' |
    'techScience' |
    'freelance' |
    'remote' |
    'cookie' |
    'worldBag' |
    'graduate';
}

// Иконка
export default function Icon({
  name,
  width = 24,
  height = 24,
  ...props
}: IconProps) {
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

    default: {
      const unknownName: never = name;
      throw new Error(`Неизвестный тип иконки ${unknownName}`);
    }
  }
}
