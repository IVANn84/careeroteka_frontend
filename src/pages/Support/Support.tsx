import React from 'react';
import first from 'Image/landing/first.png';

import Title from './components/blocks/Title';
import Responses from './components/blocks/Responses';
import Header from './components/blocks/Header';
import Benefits from './components/blocks/Benefits';
import Assistants from './components/blocks/Assistants';

export default function Support({ classes }) {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <Title />
        <img alt="main" className={classes.image} src={first} />
        <Responses />
        <Benefits />
        <Assistants />
      </main>
    </>
  );
}
