// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

capitalize = (str) => {
// capitalizes the first letter of the string
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++){
    // if the letter being iterated over has a space behind it (i.e. i - 1),
    //  upper case the iterated letter and push into result
    if (str[i - 1] === " "){
      result += str[i].toUpperCase()
    } else {
      // otherwise, add the letter as is to result
      result += str[i]
    }
  }

  return result
}

module.exports = capitalize;

// function capitalize(str) {
//   const words = []
//
// // loops over str where there is a space (e.g., [a, short, sentence])
//   for (let word of str.split(" ")){
//     // word.slice gives you the rest of the word except first character
//     // "short".slice(1) ==> "ort"
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//
//   // join with space and return
//   return words.join(" ")
// }
