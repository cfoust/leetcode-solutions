# Explanation:
# Your first instinct is probably just to iterate (or recurse) and sum the
# digits until the number converges. That is a fine approach as (though I
# haven't proven this) doing so should converge quickly.
#
# That's a swell approach, but there's a better one. The prompt hints at
# this. It implies that its worst-case complexity is O(1), but to my
# knowledge that's not possible. Regardless of what you do, the complexity
# of calculating the output is still linear in the size of the input. This
# is because the modulo operation takes linear time; you can't get better
# than that, but this approach is far faster than the iterative approach.
#
# So why does it work? Think about it in terms of the sequence. The numbers
# from one to nine are just returned untouched. Then 10 resets back to one
# again. 11 is two. 11 % 9 = 2. 10 % 9 = 1. This pattern holds for every
# positive integer, probably.  There is a special case, though: if the input
# is equally divisible by 9, we just return 9.

class Solution:
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        return num % 9 or 9

s = Solution()

assert s.addDigits(78) == 6
assert s.addDigits(1234) == 1
assert s.addDigits(111) == 3
assert s.addDigits(12345) == 6
