import React from 'react';
import Sticky from 'react-sticky-el';

import {useStoreProfessionPage} from 'Page/Profession/stores';
import Block from 'Component/Block';
import Dropdown from 'Component/Dropdown';
import Typography from 'Component/Typography';
import TextSkeleton from './components/TextSkeleton';

import {useDevice} from 'Hook/useDevice';

export default function Directions({
    classes,
}) {
    const {
        fieldsStore,
        directionsStore,
        gradesStore,
    } = useStoreProfessionPage();
    
    const deviceType = useDevice();
    
    return (
        <Block mode='dark'>
            <Typography
                variant='H2'
                variantMobile='H3'
                component='h2'
                className={classes.header}>
                Направления развития
            </Typography>
            <Sticky
                topOffset={deviceType === 'desktop' ? -36 : -5}
                dontUpdateHolderHeightWhenSticky
                stickyClassName={classes.sticky}>
                <div className={classes.selections}>
                    <Dropdown
                        className={classes.gradesDropdown}
                        mode='primary'
                        placeholder='Выберите грейд'
                        options={gradesStore.values}
                        isDisabled={gradesStore.isLoading}
                        selectedId={fieldsStore.gradeId}
                        selectedValue={fieldsStore.gradeName}
                        onSelect={fieldsStore.setGrade}/>
                    <Dropdown
                        className={classes.directionsDropdown}
                        placeholder='Выберите направление'
                        options={directionsStore.values}
                        isDisabled={directionsStore.isLoading}
                        selectedId={fieldsStore.directionId}
                        selectedValue={fieldsStore.directionName}
                        onSelect={fieldsStore.setDirection}/>
                </div>
            </Sticky>
            <div className={classes.directionDescription}>
                <TextSkeleton isDisplayed={directionsStore.isLoading}>
                    <Typography
                        variant='B1'
                        variantMobile='B2'>
                        {fieldsStore.directionDescription}
                    </Typography>
                </TextSkeleton>
            </div>
        </Block>
    );
}