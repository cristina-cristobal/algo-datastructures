// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// reverse = (str) => {
//  let strArray = str.split("")
//  let newArr = []
//  for(let i = str.length - 1; i >= 0; i--){
//    newArr.push(str[i])
//  }
//  return revString = newArr.join("")
// }

// reverse = (str) => {
//   let strArray = str.split("")
//   let newArr = []
//
//   strArray.forEach((letter) => {
//     newArr.unshift(letter)
//   })
//
//   let revString = newArr.join("")
//   return revString
// }


// function reverse(str){
// let reversed = '';
//
// // "for of" syntax
// for (let character of str) {
//   reversed = character + reversed
// }
// return reversed
// }


// reverse = (str) => {
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed
//   }, "")
// }


// same as above, but condensed
reverse = (str) => {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
