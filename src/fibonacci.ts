export function fibonacci(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}
