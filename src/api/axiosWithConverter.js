import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export const axiosWithConverter = applyCaseMiddleware(axios.create(), {
    ignoreHeaders: true,
    preservedKeys: key => key.includes('__'),
});