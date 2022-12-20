import React from 'react';
import {useHistory} from 'react-router-dom';

import {useStoreProfessionPage} from 'Page/Profession/stores';
import Block from 'Component/Block';
import Button from 'Component/Button';
import Typography from 'Component/Typography';
import surveyImage from 'Image/survey-phone.svg';

export default function Survey({
    classes,
}) {
    const history = useHistory();
    const {
        entityStore,
    } = useStoreProfessionPage();
    
    const gotoSurvey = () => history.push('/survey');
    
    return (
        <Block
            mode='dark'
            className={classes.container}>
            <div className={classes.about}>
                <Typography
                    variant='H2'
                    variantMobile='H3'
                    component='h2'>
                    Принять участие в опросе
                </Typography>
                <Typography
                    variant='B1'
                    variantMobile='B2'>
                    Данные на странице формируются из опросов <br/> реальных экспертов. Если вы работаете в этой <br/>
                    профессии, пройдите небольшой опрос, <br/> чтобы поделиться опытом и помочь другим <br/>
                    специалистам быстрее развиваться <br/> и строить карьеру.
                </Typography>
                <div className={classes.actions}>
                    <Button
                        mode='dark'
                        variant='filled'
                        isDisabled={entityStore.isLoading}
                        onClick={gotoSurvey}>
                        Пройти опрос
                    </Button>
                </div>
            </div>
            <div className={classes.image}>
                <img
                    src={surveyImage}
                    alt='Опрос'/>
            </div>
        </Block>
    );
}