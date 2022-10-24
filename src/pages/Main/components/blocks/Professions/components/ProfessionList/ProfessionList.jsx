import React from 'react';
import accounting from 'accounting-big';
import InfiniteScroll from 'react-infinite-scroll-component';

import Preloader from 'Component/Preloader';
import getNoun from 'Util/getNoun';
import {useSelector} from 'react-redux';

export default function ProfessionList({
    fetchNextProfessionList,
    
    classes,
}) {
    const {
        professions: {
            isLoading,
            valueList,
            nextPage,
        },
    } = useSelector(({Main}) => Main);
    
    const formatMoney = value => accounting.formatMoney(value, {
        symbol: '',
        precision: 0,
        thousand: ' ',
    });
    
    const getDirectionNoun = count =>
        getNoun(count, ['специальность', 'специальности', 'специальностей']);
    
    return (
        <Preloader isDisplayed={isLoading}>
            <InfiniteScroll
                className={classes.infiniteScroll}
                dataLength={valueList}
                next={fetchNextProfessionList}
                hasMore={nextPage}
                loader={<Preloader isDisplayed/>}
                scrollThreshold="600px">
                <div className={classes.professionsContainer}>
                    {valueList.length
                        ? valueList.map(({id, name, salaryMinValue, countDirections}) => (
                            <div
                                key={id}
                                className={classes.professionItem}>
                                <div className={classes.professionTitle}>
                                    <p>
                                        {name}
                                    </p>
                                    <span>
                                        {countDirections} {getDirectionNoun(countDirections)}
                                    </span>
                                </div>
                                <p className={classes.professionMinSalary}>
                                    от {formatMoney(salaryMinValue)} ₽
                                </p>
                            </div>
                        ))
                        : (
                            <span>
                                Ничего не найдено
                            </span>
                        )}
                </div>
            </InfiniteScroll>
        </Preloader>
    );
}