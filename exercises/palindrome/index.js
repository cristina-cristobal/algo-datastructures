// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

palindrome = (str) => {
  x = str.toString().split('')        //converts integers to strings and then splits string into array
  let len = x.length                  // saves array length as variable
  for (let i=0; i<len/2; i++){        // starts loop at index 0 until midway point, increasing by 1
    if (x[i] !== x[len-1-i]){         // in loop, returns false if x[i] !== as mirroring position starting from -1
      return false
    }
  }
  return true                         // otherwise returns true
}

palindrome = (str) => {
   const reversed = str.split('').reverse().join('')
   return str === reversed
}

palindrome = (str) => {
  return str.split('').every((char, i) => {
    return char === str[str.length-1-i]
  })
}

module.exports = palindrome;
