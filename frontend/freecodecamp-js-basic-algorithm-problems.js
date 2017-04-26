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
    num--;
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

// 1. Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  if (num > 0) { return str.repeat(num); }
  return '';
}

repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
  if (num <= 3) {
    return str.slice(0, num) + "...";
  } else if (str.length > num) {
    return str.slice(0, num - 3) + "...";
  }
  return str;
}

// Write a function that splits an array (first argument) into groups the length of size
// (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var finalArr = [];
  for (var i = 0; i < arr.length; i+=size) {
    // iterate through each item and depending on size arg slice (extract) from i beginning index to index (i + size)
    // slice being none destructive will give you a copy of the initial arr arg to work with each iteration.
    finalArr.push(arr.slice(i, i + size));
  }
  return finalArr;
}

// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
  var newArray = arr.slice(howMany);
  return newArray;
}

// Return true if the string in the first element of the array contains all of the letters of
// the string in the second element of the array.

function mutation(arr) {
  var target = arr[0].toLowerCase(), test = arr[1].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) { return false; }
  }
  return true;
}

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  function isFalsy(value) {
    if (Boolean(value)) { return value; }
  }
  return arr.filter(isFalsy);
}
