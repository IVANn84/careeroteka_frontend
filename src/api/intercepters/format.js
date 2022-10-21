// Декоратор для форматирования ответов от API
export default function Format({descriptor}) {
    const method = descriptor.value;
    
    descriptor.value = async (...args) => {
        try {
            const {data} = await method.apply(this, args);
            
            return {
                data,
            };
        } catch ({response: {data, status} = {}}) {
            return {
                errors: data,
                unauthorized: 401 === status,
            };
        }
    };
}
