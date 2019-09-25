// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


vowels = (str) => {
  // 'g' makes sure it doesn't stop and 'i' means case sensitive in regex
  // .match will return array of all matches found inside []
  // if no matches found, will be null
  const matches = str.match(/[aeiou]/gi)

  // if matches exists, return matches.length
  // if not, return 0
  return matches ? matches.length : 0
}

module.exports = vowels;

// vowels = (str) => {
//   let counter = 0
//   // sets variable to all vowels
//   const checker = ['a', 'e', 'i', 'o', 'u']
//
//   for (let char of str.toLowerCase()){
//     // if char is in "checker", increment counter plus 1
//     if (checker.includes(char)) {
//       counter++
//     }
//   }
//   return counter
// }
