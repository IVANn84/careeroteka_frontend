import React from 'react';
import image from 'Image/landing/Pic.png';

import Typography from 'Component/Typography';

import Tool from './components/tool';

const tools = [
  {
    name: 'Консультант в tg',
    description: 'Мы соберём всю информацию о компании  и продукте',
    image,
  },
  {
    name: 'Парсер вакансий',
    description: 'Мы соберём всю информацию о компании  и продукте',
    image,
  },
  {
    name: 'Calendly',
    description: 'Мы соберём всю информацию о компании  и продукте',
    image,
  },
  {
    name: 'Реферальные программы',
    description: 'Мы соберём всю информацию о компании  и продукте',
    image,
  },
];

export default function Tools({ classes }) {
  return (
    <section className={classes.container}>
      <Typography className={classes.title} component="h2" variant="H2" variantMobile="H2">
        С чем мы будем
        {' '}
        <span className={classes.highlight}>работать?</span>
      </Typography>
      <div className={classes.list}>
        {tools.map(assistant => (
          <Tool key={assistant.name} {...assistant} />
        ))}
      </div>
    </section>
  );
}
