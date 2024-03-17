export function onEnter(fn: (...args: any[]) => void) {
  return ({ key }) => {
    if (key === 'Enter') {
      fn?.();
    }
  };
}
