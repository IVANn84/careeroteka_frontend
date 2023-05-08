const cached = {};

// Кеширует запрос
export default function Static({ descriptor }) {
  const method = descriptor.value;
  const key = Symbol('cache-key');

  descriptor.value = async (...args) => {
    if (key in cached) {
      return { data: cached[key] };
    }

    const result = await method.apply(this, args);
    if (!result.errors && !result.warnings) {
      cached[key] = result.data;
    }

    return result;
  };
}
