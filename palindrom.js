function isPalindromeNumber(number) {
    const strNumber = number.toString();
    const reversedStr = strNumber.split('').reverse().join('');
    return strNumber === reversedStr;
}
const number = 121;
if (isPalindromeNumber(number)) {
    console.log(`${number} is a palindrome number.`);
} else {
    console.log(`${number} is not a palindrome number.`);
}
