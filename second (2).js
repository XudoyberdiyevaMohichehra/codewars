//=========================================================================================
// 1. binary sonlarni decimal sonlarga aylantiring.
// const binary = arr => {
// };
// console.log(binary([0, 0, 0, 1])); => 1
// console.log(binary([0, 1, 0, 1])); => 5

// Answer
// const binary = (arr) => {
//   let neww = arr.join("");
//   let decimal = parseInt(neww, 2);
//   return decimal;
// };
// console.log(binary([0, 0, 0, 1]));
// console.log(binary([0, 1, 0, 1]));

//===================================================================================================
// 2. so'z ichidagi unli harflar miqdorini hisoblang
// function Unli(str) {
//
// }
// console.log(Unli('satr')); => 1
// function countVowels(str) {
//   let vowelCount = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }
// console.log(countVowels("satr"));
//================================================================================
// 3. eng qisqa so'zlar  miqdorini hisoblang
// function findShort(s) {
// }
// findShort("Let's travel abroad shall we"), => 2
// findShort("turns out random test cases are easier than writing out basic ones") => 3
// function getSmallest(str) {
//   const words = str.split(" ");
//   words.sort((a, b) => {
//     return a.length - b.length;
//   });
//   let smalles = words[0].length;
//   let count = 0;
//   for (i = 0; i < words.length; i++) {
//     if (words[i].length === smalles) {
//       count++;
//     } else {
//       break;
//     }
//   }
//   return count;
// }
// console.log(getSmallest("Lets travel abroad shall nwe"));
// =======================================================================
// 4. dublicate sonlarni qaytaring.
// function duplicates(arr) {
//
// }
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"] ==> [4, 3, 1]
// [0, 1, 2, 3, 4, 5] ==> []

// function findDuplicates(array) {
//   let duplicates = {};
//   let result = [];

//   for (i = 0; i < array.length; i++) {
//     if (duplicates[array[i]] === undefined) {
//       duplicates[array[i]] = 1;
//     } else {
//       duplicates[array[i]]++;
//     }
//   }

//   for (item in duplicates) {
//     if (duplicates[item] > 1) {
//       result.push(Number(item));
//     }
//   }

//   return result;
// }

// let array = [1, 2, 3, 4, 3, 2, 5, 6, 1];
// let duplicateNumbers = findDuplicates(array);
// console.log(duplicateNumbers);
// =======================================================================
// 5. Eng kichkina miqdorni olib tashlang.
// * Input: [1, 2, 3, 4, 5], output = [2, 3, 4, 5]
// * Input: [5, 3, 2, 1, 4], output = [5, 3, 2, 4]
// * Input: [2, 2, 1, 2, 1], output = [2, 2, 2, 1]
// function removeSmallest(arr) {
//   let min = Math.min(...arr);
//   let index = arr.indexOf(min);
//   arr.splice(index, 1);
//   return arr;
// }
// let arr = [5, 4, 8, 3, 2, 4];
// let removedArr = removeSmallest(arr);
// console.log(removedArr);
