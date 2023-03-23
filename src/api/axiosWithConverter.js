import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

export const axiosWithConverter = applyCaseMiddleware(axios.create(), {
    ignoreHeaders: true,
    preservedKeys: key => key.includes('__'),
});