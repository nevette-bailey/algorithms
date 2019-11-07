/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
  Input: 123
  Output: 321

Example 2:
  Input: -123
  Output: -321

Example 3:
  Input: 120
  Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

var reverse = function(x) {
  let newNum = x
    .toString()
    .split('')
    .reverse();
  if (newNum[newNum.length - 1] === '-') {
    newNum.length = newNum.length - 1;
    newNum = ['-', ...newNum];
  }
  const num = Number(newNum.join(''));

  if (-Math.pow(2, 31) <= num && num <= Math.pow(2, 31) - 1) {
    return num;
  } else {
    return 0;
  }
};
