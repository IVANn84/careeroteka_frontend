import { delay } from 'Util/delay';
import { axiosWithConverter } from 'ApiDir/axiosWithConverter';

let isTokenUpdating = false;

// Декоратор проверки авторизации
export default function CheckToken({ descriptor }) {
  const method = descriptor.value;

  descriptor.value = async (...args) => {
    while (isTokenUpdating) {
      // eslint-disable-next-line no-await-in-loop
      await delay(300);
    }

    const result = await method.apply(this, args);
    const { invalidToken, errors, unauthorized } = result;

    if (invalidToken) {
      try {
        isTokenUpdating = true;
        const refreshToken = localStorage.getItem('refresh');
        await axiosWithConverter.post('/api/v1/refresh/', { refreshToken });
        isTokenUpdating = false;
        return await method.apply(this, args);
      } catch ({
        response: {
          data,
          status,
        } = {},
      }) {
        isTokenUpdating = false;

        return {
          errors,
          unauthorized,
          invalidToken,
        };
      }
    }

    return result;
  };
}
