const reverseString = (str) => str.split('').reverse().join('')
const realMod = (n, m) => ((n % m) + m) % m

function solve(path, index, key, ring) {
  if (key.length == 0) {
    return path
  }

  const [needle] = key
  const right = ring.slice(index) + ring.slice(0, index)
  const left =
    reverseString(ring.slice(0, index + 1)) + reverseString(ring.slice(index))

  const rightIndex = right.indexOf(needle)
  const rightPath = solve(
    [...path, ...Array(rightIndex).fill('<-'), '_'],
    realMod(index + rightIndex, ring.length),
    key.slice(1),
    ring
  )

  const leftIndex = left.indexOf(needle)
  const leftPath = solve(
    [...path, ...Array(leftIndex).fill('->'), '_'],
    realMod(index + -1 * leftIndex, ring.length),
    key.slice(1),
    ring
  )

  const result = leftPath.length <= rightPath.length ? leftPath : rightPath
  return result
}

function printSolution(key, ring) {
  console.log(key, ring, solve([], 0, key, ring))
}

printSolution('gd', 'godding')
printSolution('aj', 'blahblahblhaoiwj')
printSolution('dn', 'godding')
