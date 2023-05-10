// Count of Vowels

// function vowels(str) {
//   let unli = "aeuioAEUIO"
//   let count = 0
//   for (let i = 0; i < str.length; i++) {
//     if (unli.indexOf(str[i]) > -1) {
//       count++
//     }
//   }
//   return count
// }

// console.log(vowels("adidas"));



// Eng kichik so"z topish

// function findShort(str) {
//   let words = str.split(" ")
//   // console.log(words);
//   let shortest = words[0].length

//   let next;
//   // console.log(next);
//   for (let i = 1; i < words.length; i++) {
//     // console.log(words.length);
//     next = words[i].length
//     if (shortest > next) shortest = next

//   }

//   return shortest
// }
// console.log(findShort("Let's travel abroad shall we dgd"));


// const dublNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]

// const delateDubl = [... new Set(dublNumbers)]
// console.log(delateDubl);

// console.log("================");

// const list = [1, 2, 1, 2, 3, 3, 4, 4]

// function arr(num) {
//   return num.filter((value, index) => num.indexOf(value) === index)
// }
// console.log(arr(list));


//  Eng kichik sonni ajratish


// const numbers = [0, 2, 3, 4, 5, 6]
// let min = null;

// for (v of numbers) {
//   if (min == null) {
//     min = v
//   } else if (v < min) {
//     min = number
//   }
// }
// console.log(min);