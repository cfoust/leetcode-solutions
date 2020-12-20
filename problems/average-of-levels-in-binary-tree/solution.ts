interface NodeChild {
  left: TreeNode;
  right: TreeNode;
}
interface TreeNode {
  value: number;
  children: NodeChild | null;
}

type Pair = [number, number];

function getChildren(tree: TreeNode, level: number): Pair[] {
  const { value, children } = tree;
  const me: Pair = [level, value];
  if (children == null) return [me] as Pair[];
  return [
    me,
    ...getChildren(children.left, level + 1),
    ...getChildren(children.right, level + 1),
  ];
}

function calculateAverages(tree: TreeNode): number[] {
  const children = getChildren(tree, 0);
  const numbers: number[][] = children.reduce((a, v) => {
    const [level, value] = v;

    const difference = level - a.length;
    if (level >= a.length) {
      return [
        ...a,
        ...(difference > 0 ? [Array(difference).fill([])] : []),
        [value],
      ];
    }

    return [...a.slice(0, level), [...a[level], value], ...a.slice(level + 1)];
  }, []);

  return numbers.map((v) => {
    return v.reduce((a, v) => a + v, 0) / v.length;
  });
}

test("example 1", () => {
  const example: TreeNode = {
    value: 3,
    children: {
      left: {
        value: 9,
        children: null,
      },
      right: {
        value: 20,
        children: {
          left: {
            value: 15,
            children: null,
          },
          right: {
            value: 7,
            children: null,
          },
        },
      },
    },
  };
  expect(calculateAverages(example)).toStrictEqual([3, 14.5, 11]);
});
