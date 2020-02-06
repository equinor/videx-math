/* eslint-disable no-undef */
import {
  clamp,
  step,
  smoothstep,
  lerp,
  round,
  radians,
  degrees,
  nrad,
  seq,
  seqI,
  min,
  max,
  extent,
  mean,
} from '../src/index';

test('clamp', () => {
  expect(clamp(2)).toBe(1);
  expect(clamp(0, 10, 20)).toBe(10);
});

test('step', () => {
  expect(step(1, 2)).toBe(1);
  expect(step(1, 0.5)).toBe(0);
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

test('seq', () => {
  expect(seq(2, 4, 5)).toEqual([2, 2.5, 3, 3.5, 4]);
  expect(seq(-1, 1, 2)).toEqual([-1, 1]);
});

test('seqI', () => {
  expect(seqI(2)).toEqual([0, 1]);
  expect(seqI(5)).toEqual([0, 0.25, 0.5, 0.75, 1]);
});

test('min', () => {
  expect(min(2, 1, 3)).toEqual(1);
  expect(min([4, 2, 5, 8, 7])).toEqual(2);
});

test('max', () => {
  expect(max(2, 1, 3)).toEqual(3);
  expect(max([4, 2, 5, 8, 7])).toEqual(8);
});

test('extent', () => {
  expect(extent(2, 1, 3)).toEqual([1, 3]);
  expect(extent([4, 2, 5, 8, 7])).toEqual([2, 8]);
});

test('mean', () => {
  expect(mean(2, 1, 3)).toEqual(2);
  expect(mean([2, 1, 3])).toEqual(2);
  expect(mean(1, 2, 3, 4)).toEqual(2.5);
});
