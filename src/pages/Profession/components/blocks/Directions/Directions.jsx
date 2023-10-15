import Sticky from 'react-sticky-el';
import React from 'react';

import { useStoreProfessionPage } from 'Page/Profession/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Dropdown from 'Component/Dropdown';
import Block from 'Component/Block';

import TextSkeleton from './components/TextSkeleton';

export default function Directions({
  classes,
}) {
  const {
    fieldsStore,
    directionsStore,
    gradesStore,
  } = useStoreProfessionPage();

  const deviceType = useDevice();

  return (
    <Block mode="dark">
      <Typography
        className={classes.header}
        component="h2"
        variant="H2"
        variantMobile="H3"
      >
        Направления развития
      </Typography>
      <Sticky
        dontUpdateHolderHeightWhenSticky
        stickyClassName={classes.sticky}
        topOffset={deviceType === 'desktop' ? -36 : -5}
      >
        <div className={classes.selections}>
          <Dropdown
            className={classes.gradesDropdown}
            isDisabled={gradesStore.isLoading}
            mode="primary"
            onSelect={fieldsStore.setGrade}
            options={gradesStore.values}
            placeholder="Выберите грейд"
            selectedId={fieldsStore.gradeId}
            selectedValue={fieldsStore.gradeName}
          />
          <Dropdown
            className={classes.directionsDropdown}
            isDisabled={directionsStore.isLoading}
            onSelect={fieldsStore.setDirection}
            options={directionsStore.values}
            placeholder="Выберите направление"
            selectedId={fieldsStore.directionId}
            selectedValue={fieldsStore.directionName}
          />
        </div>
      </Sticky>
      <div className={classes.directionDescription}>
        <TextSkeleton isDisplayed={directionsStore.isLoading}>
          <Typography
            variant="B1"
            variantMobile="B2"
          >
            {fieldsStore.directionDescription}
          </Typography>
        </TextSkeleton>
      </div>
    </Block>
  );
}
