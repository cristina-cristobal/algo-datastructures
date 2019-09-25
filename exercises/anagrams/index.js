// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

anagrams = (stringA, stringB) => {

// once strings are sorted, checks to see if same
  return cleanString(stringA) === cleanString(stringB)

}

cleanString = (str) => {
  // takes out additional characters, lowercases, then creates array
  // sorts that array and then takes it out of array (now sorted)
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//
// // if objects have a different amount of keys, then return false
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false
//   }
//
//   // iterate over one charMap and compare to other charMap
//   // if charMaps are different when iterating, then return false
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]){
//       return false
//     }
//   }
//
// // if strings have not returned false by now through the tests above, return true
//   return true
//
// }
//
// buildCharMap = (str) => {
//   const charMap = {}
//   // alternatively could have created a nother variable above this line
//   // to hold only the characters we need
//   // (e.g., let characters = str.replace(/[^\w]/g).toLowerCase()
//
//   // places regex into for loop, so we're only iterating over the characters
//   // we want, not spaces or punctiation
//
//   for (let char of str.replace(/[^\w]/g).toLowerCase()){
//     // if exists, add 1 to charMap[char] OR set to 1
//     charMap[char] = charMap[char] + 1 || 1
//   }
//
//   return charMap
//
// }
