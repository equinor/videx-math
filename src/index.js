import { RAD2DEG, DEG2RAD, TAU } from './const';

/**
 * Clamps the value to min or max if value is less than min or greater than max.
 * @param {Number} value Value to clamp
 * @param {Number} [min=0] Minimum value (Default: 0)
 * @param {Number} [max=1] Maximum value (Default: 1)
 * @return {Number} Clamped value
 *
 * @example
 * // Returns 7
 * clamp(8, 3, 7);
 */
export function clamp(value, min, max) {
  if (min === undefined) min = 0;
  if (max === undefined) max = 1;
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

/**
 * Generate a step function by comparing two values.
 * @param {Number} edge Edge of the step function
 * @param {Number} x Value used to generate the step function
 * @return {Number} Returns either 0 or 1
 */
export function step(edge, x) {
  return x >= edge ? 1 : 0;
}

/**
 * Perform Hermite interpolation between two values.
 * @param {Number} edge0 Lower edge of the Hermite function
 * @param {Number} edge1 Upper edge of the Hermite function
 * @param {Number} x Source value for interpolation
 * @return {Number} Hermite interpolated value
 */
export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0));
  return t * t * (3.0 - 2.0 * t);
}

/**
 * Linear interpolation between two numbers.
 * @param {Number} a Number to interpolate from
 * @param {Number} b Number to interpolate to
 * @param {Number} t Interpolation parameter, 0 = a and 1 = b
 * @return {Number} The interpolated value
 *
 * @example
 * // Returns 3
 * lerp(2, 4, 0.5);
 */
export function lerp(a, b, t) {
  const m = clamp(t, 0, 1);
  return a * (1 - m) + b * m;
}

/**
 * Rounds number to a specific amount of digits.
 * @param {Number} value Value to round
 * @param {Number} [digits=1] Number of digits (Default: 1)
 * @return {Number} Rounded value
 *
 * @example
 * // Returns 3.142
 * round(Math.PI, 3);
 */
export function round(value, digits) {
  if (digits === undefined) digits = 1;
  const f = 10 ** digits;
  return Math.round(value * f) / f;
}

/**
 * Convert degrees to radians.
 * @param {Number} deg Angle in degrees
 * @returns {Number} Angle in radians
 *
 * @example
 * // Returns π / 2
 * radians(90);
 */
export function radians(deg) {
  return deg * DEG2RAD;
}

/**
 * Convert radians to degrees.
 * @param {Number} rad Angle in radians
 * @returns {Number} Angle in degrees
 *
 * @example
 * // Returns 180
 * degrees(Math.PI);
 */
export function degrees(rad) {
  return rad * RAD2DEG;
}

/**
 * Normalise an angle to be between -π and +π.
 * @param {Number} rad Angle in radians
 * @return {Number} Normalised angle
 */
export function nrad(rad) {
  const v = rad % TAU;
  return (v < 0 ? v + TAU : v);
}

/**
 * Generates a list of interpolated values between start and end,
 * where the number of elements returned is equal to the amount
 * of steps.
 * @param {Number} start Start of interpolated range
 * @param {Number} end End of interpolated range
 * @param {Number} steps Steps of interpolation
 * @returns {Number[]} Interpolated series
 *
 * @example
 * // Returns [2, 2.5, 3, 3.5, 4]
 * seq(2, 4, 5);
 */
export function seq(start, end, steps) {
  const target = new Array(steps);
  const incr = (end - start) / (steps - 1);
  target[0] = start;
  for (let i = 1; i < steps - 1; i++) {
    target[i] = start + i * incr;
  }
  target[steps - 1] = end;
  return target;
}

/**
 * Generates a list of interpolated values between 0 and 1,
 * where the number of elements returned is equal to the amount
 * of steps.
 * @param {Number} steps Steps of interpolation
 * @returns {Number[]} Interpolated series
 *
 * @example
 * // Returns [0, 0.25, 0.5, 0.75, 1]
 * seqI(5);
 */
export function seqI(steps) {
  const target = new Array(steps);
  const incr = 1 / (steps - 1);
  target[0] = 0;
  for (let i = 1; i < steps - 1; i++) {
    target[i] = i * incr;
  }
  target[steps - 1] = 1;
  return target;
}
