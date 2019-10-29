/* eslint-disable no-undef */
import {
  clamp,
  smoothstep,
  lerp,
  round,
  radians,
  degrees,
  nrad,
} from '../src/index';

test('clamp', () => {
  expect(clamp(2)).toBe(1);
  expect(clamp(0, 10, 20)).toBe(10);
});

test('smoothstep', () => {
  expect(smoothstep(0, 1, 0.25)).toBeLessThan(0.25);
  expect(smoothstep(0, 1, 0.5)).toBe(0.5);
  expect(smoothstep(0, 1, 0.75)).toBeGreaterThan(0.75);
});

test('lerp', () => {
  expect(lerp(0, 10, 0)).toBe(0);
  expect(lerp(0, 10, 1)).toBe(10);
  expect(lerp(0, 10, 0.25)).toBe(2.5);
});

test('round', () => {
  expect(round(Math.PI, 1)).toBe(3.1);
  expect(round(Math.PI, 2)).toBe(3.14);
  expect(round(Math.PI, 3)).toBe(3.142);
});

test('radians', () => {
  expect(radians(0)).toBe(0);
  expect(radians(90)).toBe(Math.PI / 2);
  expect(radians(180)).toBe(Math.PI);
});

test('degrees', () => {
  expect(degrees(0)).toBe(0);
  expect(degrees(Math.PI / 2)).toBe(90);
  expect(degrees(Math.PI)).toBe(180);
});

test('nrad', () => {
  expect(nrad(-Math.PI)).toBe(Math.PI);
  expect(nrad(0)).toBe(0);
});
