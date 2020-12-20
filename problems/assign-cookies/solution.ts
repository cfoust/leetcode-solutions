function numSatisfied(children: number[], cookies: number[]): number {
  if (children.length == 0 || cookies.length == 0) return 0;

  const [cookie, ...cookiesLeft] = cookies;
  const target = children.findIndex((v) => v <= cookie);
  if (target == -1) return 0;
  return 1 + numSatisfied(children.slice(target + 1), cookiesLeft);
}

function assignCookies(children: number[], cookies: number[]): number {
  return numSatisfied(children.sort().reverse(), cookies.sort().reverse());
}

test("example 1", () => {
  expect(assignCookies([1, 2, 3], [1, 1])).toBe(1);
});

test("example 2", () => {
  expect(assignCookies([1, 2], [1, 2, 3])).toBe(2);
});
