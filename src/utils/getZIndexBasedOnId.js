const getZIndexBasedOnId = (id) => {
  if (id === "hackable-wall") {
    return -1;
  }
  if (id === "external-wall" || id === "unhackable-wall") {
    return 1;
  }

  return 2;
};

export default getZIndexBasedOnId;
