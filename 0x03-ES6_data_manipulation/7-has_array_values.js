const hasValuesFromArray = (set, array) => {
  let isExist = false;

  array.map((el) => {
    for (const val of set) {
      if (el === val) {
        isExist = true;
        break;
      }
      isExist = false;
    }

    return (el);
  });

  return (isExist);
};

export default hasValuesFromArray;
