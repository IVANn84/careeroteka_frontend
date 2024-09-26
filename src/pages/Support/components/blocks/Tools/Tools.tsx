import React from 'react';
import image1 from 'Image/landing/tg.png';
import image4 from 'Image/landing/lorem_ipsum.png';
import image2 from 'Image/landing/Cources.png';
import image3 from 'Image/landing/Calendly.png';

import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';

import Tool from './components/tool';
import ToolsSlider from './components/ToolsSlider';

const tools = [
  {
    id: 1,
    name: 'Консультант в tg',
    description: 'Мы соберём всю информацию о компании  и продукте',
    image: image1,
  },
  {
    id: 2,
    name: 'Парсер вакансий',
    description: 'Мы соберём всю информацию о компании  и продукте',
    image: image2,
  },
  {
    id: 3,
    name: 'Calendly',
    description: 'Мы соберём всю информацию о компании  и продукте',
    image: image3,
  },
  {
    id: 4,
    name: 'Реферальные программы',
    description: 'Мы соберём всю информацию о компании  и продукте',
    image: image4,
  },
];

export default function Tools({ classes }) {
  const device = useDevice();

  return (
    <section className={classes.container}>
      <Typography
        className={classes.title}
        component="h2"
        variant="H2"
        variantMobile="H3"
      >
        С чем мы будем
        {' '}
        <span className={classes.highlight}>работать?</span>
      </Typography>
      {['desktop', 'tablet'].includes(device) ? (
        <div className={classes.list}>
          {tools.map(assistant => (
            <Tool key={assistant.id} {...assistant} />
          ))}
        </div>
      ) : (
        <ToolsSlider toolsList={tools} />
      )}
    </section>
  );
}
