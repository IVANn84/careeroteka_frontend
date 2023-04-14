export default function Auth(target, name, descriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = async function (...args) {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
  
        if (!accessToken) {
            throw new Error('Access token is missing');
        }
  
        // Можно сделать новый роут для проверки токена доступа
        const response = await fetch('/api/v1/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({accessToken}),
        });
  
        if (response.ok) {

            return originalMethod.apply(this, args);
        }
  
        if (response.status === 401 && refreshToken) {
            const refreshResponse = await fetch('/api/v1/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({refreshToken}),
            });
  
            if (refreshResponse.ok) {
                const {accessToken} = await refreshResponse.json();
                localStorage.setItem('accessToken', accessToken);
  
                return originalMethod.apply(this, args);
            }
        }
  
        throw new Error('Access token expired');
    };
  
    return descriptor;
}