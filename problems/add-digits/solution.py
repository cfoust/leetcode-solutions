class Solution:
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        mod = num % 9
        
        if num == 0:
            return 9

        return mod


s = Solution()

assert s.addDigits(78) == 6
assert s.addDigits(1234) == 1
assert s.addDigits(111) == 3
assert s.addDigits(12345) == 6
