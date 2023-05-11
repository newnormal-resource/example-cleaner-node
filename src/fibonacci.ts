export function fibonacci(n: number): number {
  const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
  return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}
