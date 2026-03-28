// test.js
import { test } from 'node:test';
import assert from 'node:assert';
import { sum as sumFunction } from './index.js'; // Ganti nama untuk menghindari konflik

test('sum should add two numbers correctly', (t) => {
  assert.strictEqual(sumFunction(1, 2), 3, '1 + 2 should equal 3');
  assert.strictEqual(sumFunction(-1, 1), 0, '-1 + 1 should equal 0');
  assert.strictEqual(sumFunction(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(sumFunction(1.5, 2.5), 4, '1.5 + 2.5 should equal 4');
});
