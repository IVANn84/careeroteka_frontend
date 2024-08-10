import React from 'react';
import image from 'Image/landing/Pic.png';

import Typography from 'Component/Typography';

import Assistant from './components/assistant';

const assistants = [
  {
    name: 'Николай Ширинкин',
    description: 'Частный практик, независимый консультант, предприниматель',
    image,
  },
  {
    name: 'Николай Ширинкин',
    description: 'Частный практик, независимый консультант, предприниматель',
    image,
  },
  {
    name: 'Николай Ширинкин',
    description: 'Частный практик, независимый консультант, предприниматель',
    image,
  },
  {
    name: 'Николай Ширинкин',
    description: 'Частный практик, независимый консультант, предприниматель',
    image,
  },
];

export default function Assistants({ classes }) {
  return (
    <section className={classes.container}>
      <Typography className={classes.title} component="h2" variant="H2" variantMobile="H3">
        Кто будет
        {' '}
        <span className={classes.highlight}>помогать мне</span>
        {' '}
        с поиском работы?
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B1"
        variantMobile="B2"
      >
        В&nbsp;нашей команде 100+ карьерных консультантов и&nbsp;рекрутеров,
        которые регулярно работают с&nbsp;рынком. Подберём тех, кто разбирается
        в&nbsp;вашей профессиональной области.
      </Typography>
      <div className={classes.list}>
        {assistants.map(assistant => (
          <Assistant key={assistant.name} {...assistant} />
        ))}
      </div>
    </section>
  );
}
