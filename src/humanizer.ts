export const size = (bytes: number): string => {
	if (bytes < 1024 * 1024) {
		return `${(bytes / 1024).toFixed(2)} KB`;
	}
	if (bytes < 1024 * 1024 * 1024) {
		return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
	}
	if (bytes < 1024 * 1024 * 1024 * 1024) {
		return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
	}
	if (bytes < 1024 * 1024 * 1024 * 1024 * 1024) {
		return `${(bytes / (1024 * 1024 * 1024 * 1024)).toFixed(2)} TB`;
	}
	if (bytes < 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
		return `${(bytes / (1024 * 1024 * 1024 * 1024 * 1024)).toFixed(2)} PB`;
	}
	return `${bytes} B`;
};

export const nanoseconds = (nanos: number): string => {
	if (nanos < 1000) {
		return `${nanos} ns`;
	}
	if (nanos < 1000 * 1000) {
		return `${(nanos / 1000).toFixed(2)} us`;
	}
	if (nanos < 1000 * 1000 * 1000) {
		return `${(nanos / (1000 * 1000)).toFixed(2)} ms`;
	}
	return `${(nanos / (1000 * 1000 * 1000)).toFixed(2)} s`;
};

export const miliseconds = (milis: number): string => {
	if (milis < 1000) {
		return `${milis} ms`;
	}
	return `${(milis / 1000).toFixed(2)} s`;
};
