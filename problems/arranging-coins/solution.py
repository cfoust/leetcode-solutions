# Just like in the add-digits problem, you can do somewhat better than just
# iterating. You're trying to find the nearest positive integer `i` such
# that the sum of all numbers from 0 to i is less than n. This is made easy
# if you know about triangular numbers:
# T_a = (a * (a + 1)) / 2
# Where `a` is a positive integer representing a row in the "staircase"
# and T_a is the number of coins needed to make that staircase.
# Once we have that, we can do a binary search and just look for the
# integer that satisfies that condition.

triangle = lambda n: (n * (n + 1)) / 2

def search(lower, upper, needle):
    middle = ((upper - lower) / 2) + lower
    coins = triangle(middle)

    if coins <= needle and coins + middle + 1 > needle:
        return middle

    if coins > needle:
        return search(lower, middle, needle)

    if coins < needle:
        return search(middle, upper, needle)

class Solution:
    def arrangeCoins(self, n):
        """
        :type n: int
        :rtype: int
        """
        return search(0, n, n)

s = Solution()

assert s.arrangeCoins(3) == 2
assert s.arrangeCoins(4) == 2
assert s.arrangeCoins(6) == 3
assert s.arrangeCoins(8) == 3
