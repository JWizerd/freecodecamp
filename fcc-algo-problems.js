// reverse a string
/**
* split string into array
* pop last value and push to beginning of array
* toString and then return str
**/

function reverseString(str) {
  return str.split('').reverse().join('')
}

/*
* Return the factorial of the provided integer.
* If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
* Factorials are often represented with the shorthand notation n!
* For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

PSUEDO: 
 - create an array of numbers be iterating through a range, num being max and zero being min
*/

function factorialize(num) {
  arr = []
  count = num
  while(count > 0) {
    arr.unshift(count--)
  }

  if (num === 0) {
    return 1
  } else {
    num = arr.reduce(function(prevNum, nextNum) { return prevNum * nextNum })
    return num
  }
}


/*
Check for Palindromes

PSUDEO:
- remove all special characters and turn string lowercase
- testStr = str.split('').reverse().join('')
- if testStr === str ? true : false;
*/

function palindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase()
  testStr = str.split('').reverse().join('')
  return str === testStr
}

/* 
find longest word in sentence
PSEDUO: 
- str.split(' ') adding a space removes white spaces in array
- str.split.reduce(func(prev,next) { return prev.length > next.length ? prev.length : false })
*/

function findLongestWord(str) {
  lengths = []
  str = str.split(' ')
  str.map(function(x) {
    lengths.push(x.length)
  })
  return lengths.reduce(function(prev, next) {
    return Math.max(prev, next)
  })
}

/*
Capitalize First Letter of Each word

PSEDUO: 
- split words into array
- splice first letter from each value
*/

function titleCase(str) {
  str = str.toLowerCase().split(' ')
  str = str.map(function(word){
    word = word.split('')
    letter = word[0].toUpperCase()
    word.splice(0,1)
    word.unshift(letter)
    word = word.join('')
    return word
  })
  return str.join(' ')
}

/*
Return Largest Numbers in Arrays  
- as long as args is/has array find reduce array to largest max value
*/

function largestOfFour(arr) {
  largestNums = []
  arr.map(function(innerArr) {
    largestNums.push(
      innerArr.reduce(function(prev,next) {
        return Math.max(prev,next)
      })
    )
  }) 
  return largestNums
}

/*
destroyer 
PSEUDO
- for n args filter through 1st arr arg 
- see if n args are within arr
- return values that are not args
*/

function destroyer(arr) {
  args = Array.from(arguments)
  return arr.filter(function(thing) {
    return !args.includes(thing)
  }) 
} 

/*
Confirm Ending
*/

function confirmEnding(str, target) {
  return str;
}

/*
Sum All Numbers in a Range
- to get a range you need min (Math.min) and a max (Math.max)
- once min and max are establish arr.push min + 1 until max is reach
- then arr.reduce to find the sum of all nums in a range
*/

function sumAll(arr) {
  range = []
  max = Math.max.apply(null, arr)
  min = Math.min.apply(null, arr)
  while (min <= max) {
    range.push(min++)
  }
  return range.reduce(function(prev, next){
    return prev + next
  })
}

/* 
Where do I belong
- sort arr
- find() indexs first nums that are smaller and larger than num
- if small or large undefined return 0 for small and last index
*/
function getIndexToIns(arr, num) {
  arr = arr.sort(function(a,b){ return a - b})

  function lowestNums(arr) {
    return arr.filter(function(i) {
      return i < num
    })
  }

  lowestClosestNum = Math.max.apply(null, lowestNums(arr))

  return arr.lastIndexOf(lowestClosestNum) + 1
}

/*
Caesars Cipher
- split string into array
- iterate through array and push unicode vals into new arr 
*/

function rot13(str) { // LBH QVQ VG!
  var codes = []

  // convert letters to ASCII and store in codes[]
  for (var i = 0; i < str.length; i++) {
    code = str.charCodeAt(i)
    codes.push(code)
  }

  // ASCII 127 chars 65 - 91 are alphabetical
  str = codes.map(function(code) {
    if (code >= 65 && code <= 91) {
      if (code > 77) {
        return String.fromCharCode(code - 13)  
      } else {
        return String.fromCharCode(code + 13)
      }
    } else if (code === 32) {
      return ' '
    } else {
      return String.fromCharCode(code)
    }
  })
  return str.join('')
}

function confirmEnding(str, target) {
  var len = target.length
  var startInd = str.length - len
  var comparison = str.substring(startInd)
  return (comparison == target) ? true : false
}

/*
Diff Two Arrays
*/

// filter

function diffArray(arr1, arr2) {
  newArr = arr1.concat(arr2)
  arr1Items = newArr.filter(function(item) {
                return !arr1.includes(item) || !arr2.includes(item)
              })
  return arr1Items
}

/*
Wherefore art thou 
// filter an array of objects so that it returns only 
// the objects that have the source
*/

function whatIsInAName(collection, source) {
  keys = Object.keys(source)

  return collection.filter(function(obj) {
    for (var i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
        return false
      }
    }
    return true
  })
}


/* 
Search and Replace
*/

// create regex that finds word and replaces it
function myReplace(str, before, after) {
  regex = new RegExp(before.toLowerCase(), 'gi')
  return before[0] === before[0].toUpperCase() ? 
    str.replace(regex, after.charAt(0).toUpperCase() + after.slice(1)) : 
    str.replace(regex, after)
}


// for logging
function l(arg) {
  console.log(arg)
}