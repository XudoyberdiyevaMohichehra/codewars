//===================================================================================================
// 1. binary sonlarni decimal sonlarga aylantiring.

// const binary = arr => {

// };
// console.log(binary([0, 0, 0, 1])); => 1
// console.log(binary([0, 1, 0, 1])); => 5

// const binary = (arr) => {
//     let a = arr.join("")
//     return parseInt(a, 2)
// }
// console.log(binary([0, 0, 0, 1]));



//===================================================================================================
// 2. so'z ichidagi unli harflar miqdorini hisoblang

// function Unli(str) {
//     let s = 0
//     str.split('').map(vl => {
//         if(vl === "a" || vl === "i" || vl === "e" || vl ==="u" || vl === "o") s++
//     })
//     return s


// }
// console.log(Unli('satr')); 


//===================================================================================================
// 3. eng qisqa so'zlar  miqdorini hisoblang

// function findShort(s) {
//  let a = s.split(" ").map(vl => vl.length)
//  return Math.min(...a)
// }
// console.log(findShort("Let's travel abroad shall we a"));
//  => 2
// findShort("turns out random test cases are easier than writing out basic ones") => 3


//===================================================================================================
// 4. dublicate sonlarni qaytaring.

// function duplicates(arr) {

//     return arr.filter((item, index) => arr.indexOf(item) !== index)

// }
// console.log(duplicates([0, 1, 2, 3, 4, 5]));

// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"] ==> [4, 3, 1]
// [0, 1, 2, 3, 4, 5] ==> []

//===================================================================================================
// 5. Eng kichkina miqdorni olib tashlang.

// function min(arr){
//     let a = Math.min(...arr)
//     arr.splice(arr.indexOf(a), 1)
//     return arr
// }
// console.log(min([5, 3, 2, 1, 4]));

// * Input: [1, 2, 3, 4, 5], output = [2, 3, 4, 5]
// * Input: [5, 3, 2, 1, 4], output = [5, 3, 2, 4]
// * Input: [2, 2, 1, 2, 1], output = [2, 2, 2, 1]