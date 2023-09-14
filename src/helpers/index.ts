
interface Range {
	from: number;
	to: number;
}

interface LinearRateOptions {
	desiredRange: Range;
	relativeRange: Range;
	acc: number;
}

function getLinearRate(startBase: number, endBase: number, startAcc: number, endAcc: number, latestValue: number) {
	if(latestValue < startBase) return startAcc;
	const x = (startAcc - endAcc) / (startBase - endBase);
	let val = x * (latestValue) + 1;
	if(endAcc > startAcc && val >= Math.max(startAcc, endAcc)) return Math.max(startAcc, endAcc);
	if(endAcc < startAcc && val <= Math.min(startAcc, endAcc)) return Math.min(startAcc, endAcc);
	return val;
}


export function getLinearRateNew(options: LinearRateOptions) {
	const x = (options.desiredRange.from - options.desiredRange.to) / (options.relativeRange.from - options.relativeRange.to);
	const y = options.desiredRange.to - (options.relativeRange.to * x);
	let val = (options.acc * x) + y;
	if(options.acc < options.relativeRange.from) val = options.desiredRange.from;
	if(options.acc > options.relativeRange.to) val = options.desiredRange.to;
	return val;
}
