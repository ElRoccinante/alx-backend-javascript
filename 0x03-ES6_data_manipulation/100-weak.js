const weakMap = new WeakMap();
const queryAPI = (endPoint) => {
  const endPointCount = (weakMap.get(endPoint) + 1) || 1;

  if (endPointCount === 5) throw new Error('Endpoint load is high');

  weakMap.set(endPoint, endPointCount);
};

export { weakMap, queryAPI };
