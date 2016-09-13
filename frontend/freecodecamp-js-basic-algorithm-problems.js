//// 1. Reverse a String

// split string into an array and save its state
// for each character in the array pop the last character off and push it into an empty array
// convert the array to a string and the reassign it to string.

function reverseString(str) {
  reversedString = str.split('').reverse().join('');
  str = reversedString;
  return str;
}

//// 2. factorialze a number

// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
  var factor = num;
  if (num === 0 || num === 1) {
    return 1;
  }
  while (num > 1) {
    num--
    factor *= num;
  }
  return factor;
}


//// Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(word) {
  var formattedWord = word.toLowerCase().replace(/[\W_]/g,"");
  if (formattedWord === formattedWord.split('').reverse().join('')) {
    return true;
  }
  else {
    return false;
  }
}

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(string) {
  return string.replace(/\w\S*/g, function(chars) {
    return chars.charAt(0).toUpperCase(0) + chars.substr(1).toLowerCase();
  });
}

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    }, 0);
  });
}
