export function matrixMultiply(
  a: Float64Array,
  b: Float64Array,
  n: number
): Float64Array {
  const result = new Float64Array(n * n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result[i * n + j] += a[i * n + k] * b[k * n + j];
      }
    }
  }

  return result;
}
