export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
	if (weakMap.has(endpoint)) {
		const endpointData = weakMap.get(endpoint);
		if (endpointData >= 4) {
			throw new Error('Endpoint load is high;);
		}
		waekMap.set(endpoint, (endpointData + 1));
	} else {
		weakMap.set(endpoint, 1);
	}
};
