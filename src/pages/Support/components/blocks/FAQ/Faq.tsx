import React from 'react';

import Typography from 'Component/Typography';

import Accordion from './components/accordion';

const items = [
  {
    title: 'Как выглядит работа с ментором?',
    content:
      'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
  },
  {
    title: 'How Does It Work ?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'How does your food delivery service work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'What payment options do you accept?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Do you offer discounts or promotions?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function Faq({ classes }) {
  return (
    <section className={classes.container}>
      <Typography className={classes.title} component="h2" variant="H2" variantMobile="H3">
        Остались
        {' '}
        <span className={classes.highlight}>вопросы?</span>
      </Typography>
      <Accordion items={items} />
    </section>
  );
}
