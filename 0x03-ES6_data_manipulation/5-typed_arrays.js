const createInt8TypedArry = (length, position, value) => {
	const buffer = new ArrayBuffer(length);
	const int8Array = new Int8Array(buffer);
	if (position > int8Array.length) throw new Error('Position outside range');
	int8Array[position] = value;
	return new DataViw(buffer);
};

export default createInt8TypedArray;
