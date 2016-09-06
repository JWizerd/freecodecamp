//// 1. Reverse a String

// split string into an array and save its state
// for each character in the array pop the last character off and push it into an empty array
// convert the array to a string and the reassign it to string.

function reverseString(str) {
  reversedString = str.split('').reverse().join('');
  str = reversedString;
  return str;
}
