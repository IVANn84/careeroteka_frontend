import React from 'react';
import first from 'Image/landing/first.png';

import Tools from './components/blocks/Tools';
import Title from './components/blocks/Title';
import Responses from './components/blocks/Responses';
import Request from './components/blocks/Request';
import Rates from './components/blocks/Rates';
import Path from './components/blocks/Path';
import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import Faq from './components/blocks/FAQ';
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
        <Tools />
        <Path />
        <Rates />
        <Request />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
