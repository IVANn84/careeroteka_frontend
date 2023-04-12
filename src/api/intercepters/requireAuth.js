import {rootStoreInterceptersApi} from './stores/root';

// Декоратор редиректа при попытке дернуть API без авторизации
export default function RequireAuth({descriptor}) {
    const method = descriptor.value;
    
    descriptor.value = async (...args) => {
        const result = await method.apply(this, args);
        const {unauthorized} = result;
        
        if (unauthorized) {
            rootStoreInterceptersApi.setIsRedirectToLogin(true);
            throw 'unauthorized';
        }
        
        return result;
    };
}
