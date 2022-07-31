const getColorBasedOnId = (id) => {
  if (id === "hackable-wall") {
    return "#81a515";
  }
  if (id === "external-wall" || id === "unhackable-wall") {
    return "#000000";
  }

  if (id === "external-wall-windows") {
    return "#04A552";
  }
  if (id === "unhackable-corner") {
    return "#9A7B58";
  }

  if (id === "shelter-wall") {
    return "#0480a3";
  }

  return "#04A552";
};

export default getColorBasedOnId;
