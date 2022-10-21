import React from 'react';

import Button from 'Component/Button';
import mainHeaderImage from 'Image/main-header.png';

export default function Main({
    classes,
}) {
    return (
        <div className={classes.container}>
            <div className={classes.about}>
                <h1>
                    Вики профессий
                </h1>
                <span>
                    Энциклопедия о карьере с данными от реальных специалистов и экспертов
                </span>
                <div className={classes.actions}>
                    <Button onClick={() => window.open('/', '_blank')}>
                        Найти профессию
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => window.open('/', '_blank')}>
                        Создать план обучения
                    </Button>
                </div>
            </div>
            <div className={classes.image}>
                <img
                    src={mainHeaderImage}
                    alt="Главная"/>
            </div>
        </div>
    );
}