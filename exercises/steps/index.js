// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// RECURSION solution!!!

// e.g., steps(3)

// adding 'row' as a parameter with default value of 0
// adding 'stair' parameter with default of empty string
steps = (n, row = 0, stair = '') => {

  // base case-- if n is same as row (true)... continue
  if (n === row) {
    return
  }

  // if n === length of stair string, then console.log stair (e.g,. "#  ")
  // and call on recursive function again and increase the row
  // continue
  if (n === stair.length) {
    console.log(stair)
    // if hits condition above as TRUE, then run steps here
    // (i.e., when n === stair.length)
    return steps(n, row + 1)
  }

  // if stair.length is less than or equal to row,
  // add a '#' to stair
  if (stair.length <= row) {
    stair += '#'
    // otherwise, add a space ' ' to stair
  } else {
    stair += ' '
  }

  // instead of lines 44-50, could use ternary:
    // const add = stair.length <= row ? '#' : ' '
    // steps(n, row, stair + add)

// call function with values of updated parameters
  steps(n, row, stair)
}


module.exports = steps;


// function steps(n) {
//   // creating row of stair
//   for (let row = 0; row < n; row++){
//     let stair = ''
//
//     for (let column = 0; column < n; column ++){
//       if(column <= row){
//         stair += "#"
//       } else {
//         stair += ' '
//       }
//     }
//     // console.log in row for loop
//     console.log(stair)
//   }
// }


// STEPS:
// 1. From 0 to n (iterate through rows)
      // 1a. Create an empty string, "stair"
      // 1b. From 0 to n (iterate through columns)
        // if the current column is equal or less than the current row
        //  add a "#" to "stair"
  // else
    // Add a space to 'stair'
  // Console.log "stair"
