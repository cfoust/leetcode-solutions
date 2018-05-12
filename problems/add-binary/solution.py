class Solution:
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        # Make the strings a bit easier to handle by making them
        # into lists of integers.
        regularize = lambda l: [int(x) for x in list(reversed(l))]

        a = regularize(a)
        b = regularize(b)
        result = []
        overflow = 0

        # Simple function that lets us extend to nonexistent
        # indices of the input array.
        def grab(array, index):
            if index < len(array):
                return array[index]
            return 0

        for i in range(max(len(a), len(b))):
            a_bit = grab(a, i)
            b_bit = grab(b, i)

            bit = (a_bit ^ b_bit) | overflow
            result.append(bit)
            overflow = a_bit & b_bit
        
        if overflow:
            result.append(overflow)

        return "".join([str(x) for x in regularize(result)])

s = Solution()

assert s.addBinary("1", "1") == "10"
assert s.addBinary("10", "10") == "100"
assert s.addBinary("11", "10") == "101"
assert s.addBinary("101", "101") == "1010"
assert s.addBinary("11", "11") == "110"
