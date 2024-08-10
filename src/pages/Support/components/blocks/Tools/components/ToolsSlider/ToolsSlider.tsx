import React from 'react';

import Tool from '../tool';

interface Props {
  classes: {[className: string]: string};
  toolsList: any[];
}

export default function ToolsSlider({
  toolsList,
  classes,
}: Props) {
  return (
    <div
      className={classes.slider}
    >
      {toolsList
        .map(assistant => (
          <Tool key={assistant.name} {...assistant} />
        ))}
    </div>
  );
}
