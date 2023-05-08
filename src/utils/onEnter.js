export function onEnter(fn) {
  return ({ key }) => {
    if (key === 'Enter') {
      fn?.();
    }
  };
}
