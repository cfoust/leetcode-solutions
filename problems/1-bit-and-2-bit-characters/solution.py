# This approach just "hops" over the second bit in a character since both of
# the two-bit characters start with a one. If we end up at the last element
# in the array, it means we hopped onto it. Since it's the only element left
# it cannot be the start of a two-bit character. Otherwise, if the last
# element in the array is a two-bit character, we will "hop" to the last
# index (which is the cardinality of the input.)

class Solution:
    def isOneBitCharacter(self, bits):
        last = len(bits) - 1

        i = 0
        while i < last:
            if bits[i]:
                i += 1
            i += 1

        return i == last

s = Solution()

print(s.isOneBitCharacter([1, 0, 0]))
print(s.isOneBitCharacter([1, 1, 1, 0]))
print(s.isOneBitCharacter([1, 1, 1, 0, 0, 0, 0]))
print(s.isOneBitCharacter([1, 1, 1, 0, 0, 0, 0, 1, 1]))
