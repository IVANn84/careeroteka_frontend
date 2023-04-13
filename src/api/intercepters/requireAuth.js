import { rootStoreInterceptersApi } from './stores/root';

// Декоратор редиректа при попытке дернуть API без авторизации
export default function RequireAuth({ descriptor }) {
  const method = descriptor.value;

  descriptor.value = async (...args) => {
    const result = await method.apply(this, args);
    const { unauthorized } = result;
    const refreshToken = localStorage.getItem('refresh');

    if (unauthorized) {

      try {
        await fetch('/api/v1/refresh', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({refreshToken}),
      });

        const result = await originalMethod.apply(this, args);
        return result;
      } catch (error) {
        rootStoreInterceptersApi.setIsRedirectToLogin(true);
        throw new Error('unauthorized');
      }
    }

    return result;
  };
}
