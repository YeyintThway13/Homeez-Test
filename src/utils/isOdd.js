function isOdd(num) {
  if (num === 0) return false;

  // eslint-disable-next-line no-bitwise
  return (num & -num) === 1;
}

export default isOdd;
