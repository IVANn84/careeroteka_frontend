import React, {useEffect} from 'react';

import Button from 'Component/Button';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import AreaList from './components/AreaList';

import {useStoreSurveyPage} from 'Page/Survey/stores';

export default function Step2({
    classes,
}) {
    const {
        setStep,
        stepsStore,
        areasStore,
    } = useStoreSurveyPage();
    
    useEffect(() => {
        areasStore.fetchAreas();
        return () => {
            stepsStore.clearSupportData();
            areasStore.setValues([]);
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
                        Выбор направления
                    </Typography>
                    <Typography
                        variant='B1'
                        variantMobile='B2'
                        component='p'>
                        Мы зададим несколько вопросов, на основе которых будем обновлять информацию на странице
                        профессии.
                    </Typography>
                </div>
                <Input
                    className={classes.areaSearchInput}
                    type='text'
                    isClearable
                    value={stepsStore.supportData.areaSearch}
                    placeholder='Поиск по направлению'
                    onChange={stepsStore.setSupportAreaSearch}/>
                <AreaList/>
            </div>
            <div className={classes.actions}>
                <Button
                    className={classes.button}
                    variant='outlined'
                    onClick={() => setStep(1)}
                    mode='dark'>
                    Назад
                </Button>
                <Button
                    className={classes.button}
                    onClick={() => setStep(3)}
                    isDisabled={!stepsStore.isStepValid(2)}
                    mode='dark'>
                    Продолжить
                </Button>
            </div>
        </div>
    );
}