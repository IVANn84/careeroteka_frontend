// Декоратор редиректа при попытке дернуть API без авторизации
export default function RequireAuth({descriptor}) {
    const method = descriptor.value;
    
    descriptor.value = async (...args) => {
        const result = await method.apply(this, args);
        const {unauthorized} = result;
        
        if (unauthorized) {
            sessionStorage.setItem('unauthorizedFromUrl', window.location.pathname + window.location.hash + window.location.search);
            
            window.location.href = '/login';
            
            throw 'unauthorized';
        }
        
        return result;
    };
}
