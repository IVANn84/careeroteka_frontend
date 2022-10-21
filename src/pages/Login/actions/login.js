import Api from 'Api';
import UpdateIsLoading from './setIsLoading';
import UpdateError from './setError';

export default function Login() {
    return async dispatch => {
        dispatch(UpdateIsLoading(true));
        
        const {errors} = await Api.Login({
            username: 'troexol',
            password: '123qwe',
        });
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
            dispatch(UpdateError(errors.detail || 'Неизвестная ошибка'));
        } else {
            const unauthorizedFromUrl = sessionStorage.getItem('unauthorizedFromUrl');
            
            if (unauthorizedFromUrl) {
                sessionStorage.removeItem('unauthorizedFromUrl');
                window.location.href = unauthorizedFromUrl;
            } else {
                window.location.href = '/';
            }
        }
        
        dispatch(UpdateIsLoading(false));
    };
}