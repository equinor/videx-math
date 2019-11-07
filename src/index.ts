import { RAD2DEG, DEG2RAD, TAU } from './const';

/**
 * Clamps the value to min or max if value is less than min or greater than max.
 * @param value Value to clamp
 * @param min Minimum value (Default: 0)
 * @param max Maximum value (Default: 1)
 * @return Clamped value
 *
 * @example
 * clamp(8, 3, 7); // Returns: 7
 */
export function clamp(value: number, min: number = 0, max: number = 1): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

/**
 * Generate a step function by comparing two values.
 * @param edge Edge of the step function
 * @param x Value used to generate the step function
 * @return Returns either 0 or 1
 */
export function step(edge: number, x: number): number {
  return x >= edge ? 1 : 0;
}

/**
 * Perform Hermite interpolation between two values.
 * @param edge0 Lower edge of the Hermite function
 * @param edge1 Upper edge of the Hermite function
 * @param x Source value for interpolation
 * @return Hermite interpolated value
 */
export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0));
  return t * t * (3.0 - 2.0 * t);
}

/**
 * Linear interpolation between two numbers.
 * @param a Number to interpolate from
 * @param b Number to interpolate to
 * @param t Interpolation parameter, 0 = a and 1 = b
 * @return The interpolated value
 *
 * @example
 * lerp(2, 4, 0.5); // Returns 3
 */
export function lerp(a: number, b: number, t: number): number {
  const m = clamp(t, 0, 1);
  return a * (1 - m) + b * m;
}

/**
 * Rounds number to a specific amount of digits.
 * @param value Value to round
 * @param digits Number of digits (Default: 1)
 * @return Rounded value
 *
 * @example
 * round(Math.PI, 3); // Returns 3.142
 */
export function round(value: number, digits: number = 1): number {
  const f = 10 ** digits;
  return Math.round(value * f) / f;
}

/**
 * Convert degrees to radians.
 * @param deg Angle in degrees
 * @returns Angle in radians
 *
 * @example
 * radians(90); // Returns π / 2
 */
export function radians(deg: number): number {
  return deg * DEG2RAD;
}

/**
 * Convert radians to degrees.
 * @param rad Angle in radians
 * @returns Angle in degrees
 *
 * @example
 * degrees(Math.PI); // Returns 180
 */
export function degrees(rad: number): number {
  return rad * RAD2DEG;
}

/**
 * Normalise an angle to be between -π and +π.
 * @param rad Angle in radians
 * @return Normalised angle
 */
export function nrad(rad: number): number {
  const v = rad % TAU;
  return (v < 0 ? v + TAU : v);
}

/**
 * Generates a list of interpolated values between start and end,
 * where the number of elements returned is equal to the amount
 * of steps.
 * @param start Start of interpolated range
 * @param end End of interpolated range
 * @param steps Steps of interpolation
 * @returns Interpolated series
 *
 * @example
 * seq(2, 4, 5); // Returns [2, 2.5, 3, 3.5, 4]
 */
export function seq(start: number, end: number, steps: number): number[] {
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
 * @param steps Steps of interpolation
 * @returns Interpolated series
 *
 * @example
 * seqI(3); // Returns [0, 0.5, 1]
 */
export function seqI(steps: number): number[] {
  const target = new Array(steps);
  const incr = 1 / (steps - 1);
  target[0] = 0;
  for (let i = 1; i < steps - 1; i++) {
    target[i] = i * incr;
  }
  target[steps - 1] = 1;
  return target;
}
