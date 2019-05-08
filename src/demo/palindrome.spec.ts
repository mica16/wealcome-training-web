describe('Palindrome checker', () => {

    it('should check whether a string is a palindrome', () => {
        assertPalindrome("");
        assertPalindrome("a");
        assertNotAPalindrome("ab");
        assertPalindrome("aa");
        assertNotAPalindrome("abca");
        assertPalindrome("abba");
        assertNotAPalindrome("acbc");
    });

});


const isPalindrome = (s: string) => {
    for (let i = 0; i < s.length; i++)
        if (straightTraversal(i, s) != backwardTraversal(i, s))
            return false;
    return true;
};

const straightTraversal = (i, s) => s.charAt(i);
const backwardTraversal = (i, s) => s.charAt(s.length - 1 - i);

const assertPalindrome = s => expect(isPalindrome(s)).toBeTruthy();
const assertNotAPalindrome = s => expect(isPalindrome(s)).toBeFalsy();