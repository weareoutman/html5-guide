
function TiltShift(image, width, height, gauss, min, max, gradient) {
	var source = new Uint8ClampedArray(image),
		data = new Uint8ClampedArray(width * height * 4);
	var matrix = matrixFactory(gauss);
	for (var x = 0; x < width; ++ x) {
		for (var y = 0; y < height; ++ y) {
			var i = (x + y * width) * 4;
			var a = min - y;
			a = a * gauss / gradient;
			if (a > gauss) {
				a = gauss;
			}
			if (a < 0) {
				a = y + 1 - max;
				a = a * gauss / gradient;
				if (a > gauss) {
					a = gauss;
				}
			}
			if (a <= 0) {
				data[i]   = source[i];
				data[i+1] = source[i+1];
				data[i+2] = source[i+2];
				data[i+3] = source[i+3];
			} else {
				var t;
				if (a == gauss) {
					t = gaussianBlurPixel(source, width, height, matrix, gauss, x, y);
				} else {
					t = gaussianBlurPixel(source, width, height, matrixFactory(a), Math.ceil(a), x, y);
				}
				data[i]   = t[0];
				data[i+1] = t[1];
				data[i+2] = t[2];
				data[i+3] = t[3];
			}
		}
	}
	return data.buffer;
}

function gaussianBlurPixel(source, width, height, matrix, gauss, x, y) {
	var value = [0, 0, 0, 0],
		max = 2 * gauss + 1;
	for (var dx = 0; dx < max; ++ dx) {
		for (var dy = 0; dy < max; ++ dy) {
			var tx = x + dx - gauss,
				ty = y + dy - gauss;
			if (tx < 0) {
				tx = 0;
			} else if (tx >= width) {
				tx = width - 1;
			}
			if (ty < 0) {
				ty = 0;
			} else if (ty >= height) {
				ty = height - 1;
			}
			var i = (tx + ty * width) * 4;
			value[0] += matrix[dx][dy] * source[i];
			value[1] += matrix[dx][dy] * source[i+1];
			value[2] += matrix[dx][dy] * source[i+2];
			value[3] += matrix[dx][dy] * source[i+3];
		}
	}
	return value;
}

var _matrix_cache = {};
function matrixFactory(gauss) {
	if (gauss in _matrix_cache) {
		return _matrix_cache[gauss];
	}
	var tho = gauss / 3,
		temp, x, y,
		total = 0,
		matrix = [],
		r = Math.ceil(gauss),
		max = 2 * r + 1;
	for (x = 0; x < max; ++ x) {
		matrix[x] = [];
		for (y = 0; y < max; ++ y) {
			if (x === r && y === r) {
				temp = 0.25 * 0.25;
			} else {
				temp = (x-r)*(x-r) + (y-r)*(y-r);
			}
			total += (matrix[x][y] = Math.pow(Math.E, -temp/Math.pow(tho,2)/2)/(Math.sqrt(2*Math.PI))/tho);
		}
	}
	for (x = 0; x < max; ++ x) {
		for (y = 0; y < max; ++ y) {
			matrix[x][y] /= total;
		}
	}
	return _matrix_cache[gauss] = matrix;
}

function onmessage(e) {
	var data = e.data;
	var buffer = TiltShift(data.image, data.width, data.height, data.gauss, data.min, data.max, data.gradient);
	postMessage({
		image: buffer
	}, [buffer]);
}

addEventListener("message", onmessage, false);