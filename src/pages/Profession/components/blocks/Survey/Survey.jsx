import { useHistory } from 'react-router-dom';
import React from 'react';
import surveyImage from 'Image/survey-phone.svg';

import { useStoreProfessionPage } from 'Page/Profession/stores';
import Typography from 'Component/Typography';
import Button from 'Component/Button';
import Block from 'Component/Block';

export default function Survey({
  classes,
}, ref) {
  const history = useHistory();
  const {
    entityStore,
  } = useStoreProfessionPage();

  const gotoSurvey = () => history.push('/survey');

  return (
    <>
      <span ref={ref} />
      <Block
        className={classes.container}
        mode="dark"
      >
        <div className={classes.about}>
          <Typography
            component="h2"
            variant="H2"
            variantMobile="H3"
          >
            Принять участие в опросе
          </Typography>
          <Typography
            variant="B1"
            variantMobile="B2"
          >
            Данные на странице формируются из опросов
            {' '}
            <br />
            {' '}
            реальных экспертов. Если вы работаете в этой
            <br />
            профессии, пройдите небольшой опрос,
            {' '}
            <br />
            {' '}
            чтобы поделиться опытом и помочь другим
            <br />
            специалистам быстрее развиваться
            {' '}
            <br />
            {' '}
            и строить карьеру.
          </Typography>
          <div className={classes.actions}>
            <Button
              isDisabled={entityStore.isLoading}
              mode="dark"
              onClick={gotoSurvey}
              variant="filled"
            >
              Пройти опрос
            </Button>
          </div>
        </div>
        <div className={classes.image}>
          <img
            alt="Опрос"
            src={surveyImage}
          />
        </div>
      </Block>
    </>
  );
}
