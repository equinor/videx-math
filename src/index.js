import { RAD2DEG, DEG2RAD, TAU } from './const';

/**
 * Clamps the value to min or max if value is less than min or greater than max.
 * @param {number} value Value to clamp
 * @param {number} [min=0] Minimum value (Default: 0)
 * @param {number} [max=1] Maximum value (Default: 1)
 * @return {number} Clamped value
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
 * @param {number} a Edge0
 * @param {number} b Edge1
 * @param {number} x threshold
 */
export function smoothstep(a, b, x) {
  const t = clamp((x - a) / (b - a));
  return t * t * (3.0 - 2.0 * t);
}

/**
 * Linear interpolation between two numbers.
 * @param {number} a Number to interpolate from
 * @param {number} b Number to interpolate to
 * @param {number} t Interpolation parameter, 0 = a and 1 = b
 * @return {number} The interpolated value
 */
export function lerp(a, b, t) {
  const m = clamp(t, 0, 1);
  return a * (1 - m) + b * m;
}

/**
 * Rounds a number to the specific number of digits.
 * @param {number} value Value to round
 * @param {number} [digits=1] Number of digits (Default: 1)
 * @return {number} Rounded value
 */
export function round(value, digits) {
  if (digits === undefined) digits = 1;
  const f = 10 ** digits;
  return Math.round(value * f) / f;
}

/**
 * Convert degrees to radians.
 * @param {number} deg Angle in degrees
 * @returns {number} Angle in radians
 */
export function radians(deg) {
  return deg * DEG2RAD;
}

/**
 * Convert radians to degrees.
 * @param {number} rad Angle in radians
 * @returns {number} Angle in degrees
 */
export function degrees(rad) {
  return rad * RAD2DEG;
}

/**
 * Normalise an angle to be between -PI to +PI.
 * @param {number} r Angle in radians
 * @return {number} Normalised angle
 */
export function nrad(r) {
  const v = r % TAU;
  return (v < 0 ? v + TAU : v);
}
