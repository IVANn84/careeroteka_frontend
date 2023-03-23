import React, {useEffect} from 'react';

import Button from 'Component/Button';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import SkillList from './components/SkillList';

import {useStoreSurveyPage} from 'Page/Survey/stores';

export default function Step3({
    classes,
}) {
    const {
        setStep,
        stepsStore,
        skillsStore,
    } = useStoreSurveyPage();
    
    useEffect(() => {
        return () => {
            stepsStore.clearSupportData();
            skillsStore.setValues([]);
        };
    }, []);
    
    return (
        <div className={classes.container}>
            <div className={classes.fields}>
                <div className={classes.header}>
                    <Typography
                        variant='H1'
                        variantMobile='H1'
                        component='h1'>
                        Расскажите о ваших навыках
                    </Typography>
                    <Typography
                        variant='B1'
                        variantMobile='B2'
                        component='p'>
                        Это поможет нам строить более эффективные программы обучения.
                    </Typography>
                </div>
                <Input
                    className={classes.skillSearchInput}
                    type='text'
                    isClearable
                    value={stepsStore.supportData.skillSearch}
                    placeholder='Поиск по навыкам'
                    onChange={stepsStore.setSupportSkillSearch}/>
                <SkillList/>
            </div>
            <div className={classes.actions}>
                <Button
                    className={classes.button}
                    variant='outlined'
                    onClick={() => setStep(2)}
                    mode='dark'>
                    Назад
                </Button>
                <Button
                    className={classes.button}
                    onClick={() => setStep(4)}
                    isDisabled={!stepsStore.isStepValid(3)}
                    mode='dark'>
                    Продолжить
                </Button>
            </div>
        </div>
    );
}