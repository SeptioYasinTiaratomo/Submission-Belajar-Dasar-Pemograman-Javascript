// sum.test.js
import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; // Ganti dengan path yang sesuai

describe('sum function', () => {
  it('should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  it('should return 0 when one of the numbers is negative', () => {
    assert.strictEqual(sum(-1, 5), 0);
    assert.strictEqual(sum(5, -2), 0);
    assert.strictEqual(sum(-3, -4), 0);
  });

  it('should return 0 when one or both inputs are not numbers', () => {
    assert.strictEqual(sum('2', 3), 0);
    assert.strictEqual(sum(2, '3'), 0);
    assert.strictEqual(sum(null, 5), 0);
    assert.strictEqual(sum(5, undefined), 0);
    assert.strictEqual(sum({}, 2), 0);
    assert.strictEqual(sum([], 3), 0);
  });

  it('should return 0 when both inputs are zero', () => {
    assert.strictEqual(sum(0, 0), 0);
  });

  it('should return the correct sum for large numbers', () => {
    assert.strictEqual(sum(1000000, 2000000), 3000000);
  });
});