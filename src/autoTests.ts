const autoTests = (elem: any) => {
  if (elem === null) {
    return true;
  } else if (elem === false) {
    return true;
  } else if (elem instanceof Array) {
    if (elem.length === 0) {
      console.warn("array is empty");
      return false;
    }

    return elem.map(autoTests);
  } else if (typeof elem === "string") {
    if (elem.length === 0) {
      console.warn("element is empty");
      return false;
    }
    return true;
  } else if (typeof elem === "object") {
    return Object.values(elem).map(autoTests);
  }
};

export default autoTests;
