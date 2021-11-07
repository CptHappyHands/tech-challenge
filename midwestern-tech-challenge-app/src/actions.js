const removeDupes = (array1, array2) => {
  let comboArray = array1.concat(array2);
  let newArray = [];
  for (let i = 0; i < comboArray.length; i++) {
    if (!newArray.includes(comboArray[i])) {
      newArray.push(comboArray[i]);
    }
  }
  return newArray;
};

export default removeDupes;
