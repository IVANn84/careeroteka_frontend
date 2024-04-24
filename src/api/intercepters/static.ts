const cached = {};

// Кеширует запрос
export default function Static(target: any, key: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  const cacheKey = Symbol('cache-key');

  descriptor.value = async (...args) => {
    if (cacheKey in cached) {
      return { data: cached[cacheKey] };
    }

    const result = await method.apply(this, args);
    if (!result.errors && !result.warnings) {
      cached[cacheKey] = result.data;
    }

    return result;
  };
}
