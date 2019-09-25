// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//
// function chunk(array, size) {
//   const chunked = []
//   for (let element of array){
//     const last = chunked[chunked.length-1]
//     // if last element does not exist OR the last element's size is the same as the chunk size,
//     // create a new chunk and push that into chunked
//
//     // at first iteration, chunked is undefined
//     if (!last || last.length === size){
//       chunked.push([element])
//     } else {
//       last.push(element)
//     }
//   }
//   return chunked
// }


chunk = (array, size) => {
  const chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    // updates index each time, adding size to index
    index += size
  }

  return chunked
}

module.exports = chunk;
