class Solution:
    def isOneBitCharacter(self, bits):
        i = 0

        while i < len(bits):
            if bits[i]:
                i += 1
            i += 1

            if i == len(bits) - 1:
                return True

        return False

s = Solution()

print(s.isOneBitCharacter([1, 0, 0]))
print(s.isOneBitCharacter([1, 1, 1, 0]))
print(s.isOneBitCharacter([1, 1, 1, 0, 0, 0, 0]))
print(s.isOneBitCharacter([1, 1, 1, 0, 0, 0, 0, 1, 1]))
