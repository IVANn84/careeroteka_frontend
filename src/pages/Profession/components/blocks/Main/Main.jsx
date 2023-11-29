import React from 'react';

import { useStoreProfessionPage } from 'Page/Profession/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Button from 'Component/Button';
import Block from 'Component/Block';

import TextSkeleton from './components/TextSkeleton';
import ImageSkeleton from './components/ImageSkeleton';

export default function Main({
  $survey,

  classes,
}) {
  const deviceType = useDevice();

  const {
    entityStore,
  } = useStoreProfessionPage();

  const onClickTellAboutProfession = () => window.scrollTo({
    // Вычитаемое - высота прикрепленного к верху страницы блока с выпадашками
    top: $survey.current.getBoundingClientRect().top + window.scrollY - (deviceType === 'desktop' ? 136 : 148),
    behavior: 'smooth',
  });

  return (
    <Block
      className={classes.container}
      style={{
        color: !entityStore.isLoading && entityStore.entity?.color?.textColor,
        backgroundColor: !entityStore.isLoading && entityStore.entity?.color?.backgroundColor,
      }}
    >
      <div className={classes.about}>
        <Typography
          component="h1"
          variant="H1"
          variantMobile="H1"
        >
          <TextSkeleton
            height={54}
            isDisplayed={entityStore.isLoading}
          >
            {entityStore.entity?.name}
          </TextSkeleton>
        </Typography>
        <Typography
          variant="B1"
          variantMobile="B1"
        >
          <TextSkeleton
            height={24}
            isDisplayed={entityStore.isLoading}
          >
            {entityStore.entity?.areas.join(', ').toLowerCase()}
          </TextSkeleton>
        </Typography>
        <div className={classes.actions}>
          <Button
            isDisplayed={!entityStore.isLoading}
            mode={(!entityStore.isLoading && entityStore.entity?.color?.buttonColor) || 'dark'}
            onClick={onClickTellAboutProfession}
            variant="outlined"
          >
            Расскажите нам о профессии
          </Button>
        </div>
      </div>
      {(entityStore.isLoading || entityStore.entity?.image) && (
        <div className={classes.image}>
          <ImageSkeleton isDisplayed={entityStore.isLoading}>
            <img
              alt={entityStore.entity?.name}
              src={entityStore.entity?.image}
            />
          </ImageSkeleton>
        </div>
      )}
    </Block>
  );
}
