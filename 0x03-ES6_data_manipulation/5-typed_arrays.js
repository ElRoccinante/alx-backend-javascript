const createInt8TypedArray = (length, position, value) => {
  if (position >= length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const int8Array = new Uint8Array(buffer);
  int8Array[position] = value;

  return (new DataView(buffer));
};

export default createInt8TypedArray;