// Декоратор для форматирования ответов от API
export default function Format(target: any, key: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  descriptor.value = async (...args) => {
    try {
      const { data } = await method.apply(this, args);

      return {
        data: data?.data,
      };
    } catch ({ response = {} }) {
      return {
        errors: response.data?.error,
        unauthorized: response.status === 401,
        invalidToken: response.data?.code === 'token_not_valid',
      };
    }
  };
}
