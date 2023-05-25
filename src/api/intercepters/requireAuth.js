/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { axiosWithConverter } from '../axiosWithConverter';
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
        await axiosWithConverter.post('/api/v1/refresh/', {
          body: JSON.stringify({ refreshToken }),
        });
        const res = await method.apply(this, args);
        return res;
      } catch (error) {
        rootStoreInterceptersApi.setIsRedirectToLogin(true);
        throw new Error('unauthorized');
      }
    }

    return result;
  };
}
