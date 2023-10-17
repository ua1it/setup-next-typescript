import { add } from './calculator';

test('add correctly', () => {
  expect(add(3, 5)).toBe(8);
});
