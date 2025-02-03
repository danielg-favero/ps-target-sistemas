const memo = [0, 1];

export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  if (memo[n]) return memo[n];

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memo[n] = result;
  return result;
}
