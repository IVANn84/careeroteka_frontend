import React from 'react';
import {useHistory} from 'react-router';

import Button from 'Component/Button';
import Typography from 'Component/Typography';

import {useStoreLayoutComponent} from 'Component/Layout/stores';

export default function Step5({
    classes,
}) {
    const history = useHistory();

    const {
        isAuth,
    } = useStoreLayoutComponent();

    const gotoMain = () => history.push('/');
    const gotoCreatePlan = () => isAuth
        ? history.push('/')
        : history.push('/login');
    
    return (
        <div className={classes.container}>
            <Typography
                className={`${classes.row} ${classes.center}`}
                variant='H1'
                variantMobile='H1'
                component='h1'>
                Спасибо, теперь мы знаем о таких специалистах немного больше!
            </Typography>
            <Typography
                className={classes.center}
                variant='B1'
                variantMobile='B2'>
                На основе этих данных мы также формируем индивидуальные программы обучения из курсов, книг и вебинаров. Можем собрать и вам.
                <p>Это бесплатно, понадобится только регистрация.</p>
            </Typography>
            <div className={classes.buttons}>
                <Button
                    onClick={gotoMain}
                    variant='outlined'
                    mode='dark'>
                    Вернуться в Вики
                </Button>
                <Button
                    onClick={gotoCreatePlan}
                    mode='dark'>
                    Создать учебный план
                </Button>
            </div>
        </div>
    );
}