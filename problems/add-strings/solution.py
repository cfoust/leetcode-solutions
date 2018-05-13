# This is mostly a copy of the solution for add-binary because of the
# problems' similarity.

class Solution:
    def addStrings(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        # Just like add-binary.
        regularize = lambda l: [int(x) for x in list(reversed(l))]

        a = regularize(num1)
        b = regularize(num2)
        result = []
        overflow = 0

        def grab(array, index):
            if index < len(array):
                return array[index]
            return 0

        for i in range(max(len(a), len(b))):
            a_digit = grab(a, i)
            b_digit = grab(b, i)

            summation = a_digit + b_digit + overflow

            overflow = summation / 10
            digit = summation % 10

            result.append(digit)
        
        if overflow:
            result.append(overflow)

        return "".join([str(x) for x in regularize(result)])

s = Solution()

assert s.addStrings("1", "1") == "2"
assert s.addStrings("111", "111") == "222"
