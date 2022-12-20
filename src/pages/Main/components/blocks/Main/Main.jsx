import React from 'react';
import {useHistory} from 'react-router-dom';

import Button from 'Component/Button';
import Typography from 'Component/Typography';
import mainHeaderImage from 'Image/main-header.png';

export default function Main({
    $professions,
    
    classes,
}) {
    const history = useHistory();
    
    const onClickFindProfession = () => window.scrollTo({
        top: $professions.current.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
    });
    
    const gotoCreatePlan = () => history.push('/create-plan');
    
    return (
        <div className={classes.container}>
            <div className={classes.about}>
                <Typography
                    variant='H1'
                    variantMobile='H1'
                    component='h1'>
                    Вики профессий
                </Typography>
                <Typography
                    variant='B1'
                    variantMobile='B1'>
                    Энциклопедия о карьере с данными от реальных специалистов и экспертов
                </Typography>
                <div className={classes.actions}>
                    <Button onClick={onClickFindProfession}>
                        Найти профессию
                    </Button>
                    <Button
                        variant='outlined'
                        onClick={gotoCreatePlan}>
                        Создать план обучения
                    </Button>
                </div>
            </div>
            <div className={classes.image}>
                <img
                    src={mainHeaderImage}
                    alt='Главная'/>
            </div>
        </div>
    );
}