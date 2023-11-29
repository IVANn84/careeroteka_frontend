import React, { useEffect } from 'react';

import { useStoreSurveyPage } from 'Page/Survey/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

import SkillList from './components/SkillList';

export default function Step3({
  classes,
}) {
  const {
    setStep,
    stepsStore,
    skillsStore,
  } = useStoreSurveyPage();

  useEffect(() => {
    skillsStore.fetchSkills();
    return () => {
      stepsStore.clearSupportData();
      skillsStore.setValues([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.fields}>
        <div className={classes.header}>
          <Typography
            component="h1"
            variant="H1"
            variantMobile="H1"
          >
            Расскажите о ваших навыках
          </Typography>
          <Typography
            component="p"
            variant="B1"
            variantMobile="B2"
          >
            Это поможет нам строить более эффективные программы обучения.
          </Typography>
        </div>
        <Input
          className={classes.skillSearchInput}
          isClearable
          onChange={stepsStore.setSupportSkillSearch}
          placeholder="Поиск по навыкам"
          type="text"
          value={stepsStore.supportData.skillSearch}
        />
        <SkillList />
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          mode="dark"
          onClick={() => setStep(2)}
          variant="outlined"
        >
          Назад
        </Button>
        <Button
          className={classes.button}
          isDisabled={!stepsStore.isStepValid(3)}
          mode="dark"
          onClick={() => setStep(4)}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}
