import {isObject} from 'Util/isObject';

/**
 * Глубокое слияние объектов
 * @param {Object} target - Объект для слияния
 * @param {Object[] | Object} sources - Объекты для слияния
 * @return {Object}
 */
export function objectDeepMerge(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, {[key]: {}});
                }
                objectDeepMerge(target[key], source[key]);
            } else {
                Object.assign(target, {[key]: source[key]});
            }
        }
    }
    
    return objectDeepMerge(target, ...sources);
}