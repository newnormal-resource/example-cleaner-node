export function fibonacci(n: number): number {
  return Math.round(
    (((1 + 5 ** 0.5) / 2) ** n - ((1 - 5 ** 0.5) / 2) ** n) / 5 ** 0.5
  );
}
