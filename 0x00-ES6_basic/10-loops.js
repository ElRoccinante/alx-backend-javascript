export default function appendToEachArrayValue(array, appendString) {
  const p = array;
  array.forEach((value, idx) => {
    p[idx] = appendString + value;
  });

  return p;
}
