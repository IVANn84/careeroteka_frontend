import React, {useEffect} from 'react';

import Button from 'Component/Button';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Dropdown from 'Component/Dropdown';
import DirectionList from './components/DirectionList';

import {useStoreSurveyPage} from 'Page/Survey/stores';

export default function Step2({
    classes,
}) {
    const {
        setStep,
        stepsStore,
        gradesStore,
        directionsStore,
    } = useStoreSurveyPage();
    
    useEffect(() => {
        gradesStore.fetchGrades();
        return () => {
            stepsStore.clearSupportData();
            directionsStore.setValues([]);
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
                <div className={classes.inputs}>
                    <Input
                        className={classes.directionSearchInput}
                        type='text'
                        isClearable
                        value={stepsStore.supportData.directionSearch}
                        placeholder='Поиск по направлению'
                        onChange={stepsStore.setSupportDirectionSearch}/>
                    <Dropdown
                        className={classes.gradesDropdown}
                        mode='primary'
                        placeholder='Выберите грейд'
                        error={stepsStore.errors.step_1.grade}
                        options={gradesStore.values}
                        isDisabled={gradesStore.isLoading}
                        checkIsSelected={({name}) => name === stepsStore.stepsData[2].grade}
                        selectedValue={stepsStore.stepsData[2].grade}
                        onSelect={({name}) => stepsStore.setStepData(2, 'grade', name)}/>
                </div>
                <DirectionList/>
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