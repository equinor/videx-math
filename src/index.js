import { RAD2DEG, DEG2RAD, TAU } from './const';

/**
 * Clamps the value to min or max if value is less than min or greater than max.
 * @param {Number} value Value to clamp
 * @param {Number} [min=0] Minimum value (Default: 0)
 * @param {Number} [max=1] Maximum value (Default: 1)
 * @return {Number} Clamped value
 */
export function clamp(value, min, max) {
  if (min === undefined) min = 0;
  if (max === undefined) max = 1;
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

/**
 * Implementation of glsl smoothstep function.
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
 */
export function radians(deg) {
  return deg * DEG2RAD;
}

/**
 * Convert radians to degrees.
 * @param {Number} rad Angle in radians
 * @returns {Number} Angle in degrees
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
