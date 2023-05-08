export const timeout = delay => new Promise(resolve => {
  setTimeout(resolve, delay);
});

export const wrapAnswer = (data, hasError, error = { error: 'Something went wrong' }) => ({
  data: !hasError
    ? data
    : null,
  errors: hasError
    ? error
    : null,
});
