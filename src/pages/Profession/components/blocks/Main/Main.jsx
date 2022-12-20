import React from 'react';

import {useStoreProfessionPage} from 'Page/Profession/stores';
import Block from 'Component/Block';
import Button from 'Component/Button';
import Typography from 'Component/Typography';
import TextSkeleton from './components/TextSkeleton';
import ImageSkeleton from './components/ImageSkeleton';

export default function Main({
    classes,
}) {
    const {
        entityStore,
    } = useStoreProfessionPage();
    
    return (
        <Block
            className={classes.container}
            style={{
                color: !entityStore.isLoading && entityStore.entity?.color?.textColor,
                backgroundColor: !entityStore.isLoading && entityStore.entity?.color?.backgroundColor,
            }}>
            <div className={classes.about}>
                <Typography
                    variant='H1'
                    variantMobile='H1'
                    component='h1'>
                    <TextSkeleton
                        isDisplayed={entityStore.isLoading}
                        height={54}>
                        {entityStore.entity?.name}
                    </TextSkeleton>
                </Typography>
                <Typography
                    variant='B1'
                    variantMobile='B1'>
                    <TextSkeleton
                        isDisplayed={entityStore.isLoading}
                        height={24}>
                        {entityStore.entity?.areas.join(', ').toLowerCase()}
                    </TextSkeleton>
                </Typography>
                <div className={classes.actions}>
                    <Button
                        mode={!entityStore.isLoading && entityStore.entity?.color?.buttonColor || 'dark'}
                        variant='outlined'
                        onClick={() => {}}
                        isDisplayed={!entityStore.isLoading}>
                        Расскажите нам о профессии
                    </Button>
                </div>
            </div>
            {(entityStore.isLoading || entityStore.entity?.image) && (
                <div className={classes.image}>
                    <ImageSkeleton isDisplayed={entityStore.isLoading}>
                        <img
                            src={entityStore.entity?.image}
                            alt={entityStore.entity?.name}/>
                    </ImageSkeleton>
                </div>
            )}
        </Block>
    );
}