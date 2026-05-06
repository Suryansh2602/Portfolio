export const getRandomIndex = (length: number) => {
  if (length <= 0) {
    return 0;
  }

  const values = new Uint32Array(1);
  window.crypto.getRandomValues(values);
  return values[0] % length;
};
