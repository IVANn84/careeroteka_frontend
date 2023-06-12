// Декоратор для форматирования ответов от API
export default function Format({ descriptor }) {
  const method = descriptor.value;

  descriptor.value = async (...args) => {
    try {
      const { data } = await method.apply(this, args);

      return {
        data: data?.data,
      };
    } catch ({ response: { data, status } = {} }) {
      return {
        errors: data?.error,
        unauthorized: status === 401,
        invalidToken: data?.code === 'token_not_valid',
      };
    }
  };
}
