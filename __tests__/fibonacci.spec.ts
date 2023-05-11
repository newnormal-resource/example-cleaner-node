import { fibonacci } from '../src/fibonacci';

describe('testing fibonacci', () => {
  it('returns 0, if 0 given', () => {
    // Exercise
    const actual = fibonacci(0);
    // Verify
    expect(actual).toBe(0);
  });

  it('returns 1, if 1 given', () => {
    // Exercise
    const actual = fibonacci(1);
    // Verify
    expect(actual).toBe(1);
  });

  it('returns 1, if 2 given', () => {
    // Exercise
    const actual = fibonacci(2);
    // Verify
    expect(actual).toBe(1);
  });

  it('returns 34, if 9 given', () => {
    // Exercise
    const actual = fibonacci(9);
    // Verify
    expect(actual).toBe(34);
  });

  it('returns 12,586,269,025, if 50 given', () => {
    // Exercise
    const actual = fibonacci(50);
    console.log(actual);
    // Verify
    expect(actual).toBe(12_586_269_025);
  });
});
