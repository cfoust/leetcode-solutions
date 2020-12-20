type Pair = [number, number];

function partition(numbers: number[]) {
  const sorted = numbers.sort();

  const pairs: Pair[] = [];
  for (let i = 0; i < sorted.length; i += 2) {
    pairs.push([sorted[i], sorted[i + 1]]);
  }

  return pairs.reduce((a, [v1, v2]) => a + Math.min(v1, v2), 0);
}

test("example 1", () => {
  expect(partition([1, 4, 3, 2])).toBe(4);
});

test("example 2", () => {
  expect(partition([6, 2, 6, 5, 1, 2])).toBe(9);
});
