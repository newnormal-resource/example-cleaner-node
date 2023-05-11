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

  it('returns 354224848179263100000, if 100 given', () => {
    // Exercise
    const actual = fibonacci(100);
    console.log(actual);
    // Verify
    expect(actual).toBe(354224848179263100000);
  });
});
