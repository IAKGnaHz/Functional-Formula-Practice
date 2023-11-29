import { calculateAverageOfEvenNumbers } from '../src/chapter1/index';
import { calculateSumOfStringLengths } from '../src/chapter1/index';

describe('calculateAverageOfEvenNumbers', () => {
  it('should return the average of even numbers in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const result = calculateAverageOfEvenNumbers(arr);
    expect(result).toBe(4);
  });

  it('should return 0 if there are no even numbers in the array', () => {
    const arr = [1, 3, 5];
    const result = calculateAverageOfEvenNumbers(arr);
    expect(result).toBe(0);
  });

  it('should return 0 if the array is empty', () => {
    const arr: number[] = [];
    const result = calculateAverageOfEvenNumbers(arr);
    expect(result).toBe(0);
  });
});

describe('calculateSumOfStringLengths', () => {
  it('should return the sum of string lengths in the array', () => {
    const arr = ['hello', 'world', 'github', 'copilot'];
    const result = calculateSumOfStringLengths(arr);
    expect(result).toBe(21);
  });

  it('should return 0 if the array is empty', () => {
    const arr: string[] = [];
    const result = calculateSumOfStringLengths(arr);
    expect(result).toBe(0);
  });
});