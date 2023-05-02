import { fizzBuzz } from '../src/fizz-buzz';

describe('testing fizz-buzz', () => {
  it('returns "1", if 1 is given', () => {
    // Exercise
    const actual = fizzBuzz(1);
    // Verify
    expect(actual).toBe('1');
  });

  it('returns "Fizz", if 3 is given', () => {
    // Exercise
    const actual = fizzBuzz(3);
    // Verify
    expect(actual).toBe('Fizz');
  });

  it('returns "Buzz", if 5 is given', () => {
    // Exercise
    const actual = fizzBuzz(5);
    // Verify
    expect(actual).toBe('Buzz');
  });

  it('returns "FizzBuzz", if 15 is given', () => {
    // Exercise
    const actual = fizzBuzz(15);
    // Verify
    expect(actual).toBe('FizzBuzz');
  });

  it('returns "Fizz", if 6 is given', () => {
    // Exercise
    const actual = fizzBuzz(6);
    // Verify
    expect(actual).toBe('Fizz');
  });

  it('returns "Buzz", if 20 is given', () => {
    // Exercise
    const actual = fizzBuzz(20);
    // Verify
    expect(actual).toBe('Buzz');
  });

  it('returns "FizzBuzz", if 75 is given', () => {
    // Exercise
    const actual = fizzBuzz(75);
    // Verify
    expect(actual).toBe('FizzBuzz');
  });
});
