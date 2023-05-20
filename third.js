// 1. ?>!*/ => soz ichida  shu kabi belgilar bittadan oshsa false oshmasa true qaytaradigan funksiya yozing

// function hasRepeatedChars(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) !== i) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(hasRepeatedChars("n??Aa++"));
// console.log(hasRepeatedChars("n?Aa+"));
//===========================================================================

// 2 Array ichidagi raqamlardan quyidagi ko'rinishdagi so'z qaytsin
// console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"])); // =>' codewars'

// const switcher = (array) => {
//   let get = {
//     4: "w",
//     8: "s",
//     9: "r",
//     12: "o",
//       22: "e",
//       23: "d",
//       24: "c",
//       26: "a",
//     };
//     let word = "";
    
//     for (let i = 0; i < array.length; i++) {
//       const num = parseInt(array[i]);
//       word += get[num];
//     }
//     return word;
//   };
  // console.log(switcher(["26", "9", "22"])); //are
  //============================================================================

// 4 dasturlash tillarini o'sish tartibiiga kora tertiblang. lekin ular 60 dan kam kursatgichga ega bulsa kursatilmasin
// function myLanguages(languages) {
//     let sortedLanguages = Object.keys(languages)
//       .sort((a, b) => languages[b] - languages[a])
//       .filter((language) => languages[language] >= 60);
  
//     return sortedLanguages;
//   }
  
//   console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); //=> ["Ruby", "Python"]
  // console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })); //=> ["Dutch", "Greek", "Hindi"]
  // console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 })); //=> []
// ===================================================================================

// 5 array ichidagi faqat juft sonlar qaytsin
// const getEvenNumbers = (numbers) => {
//     for (num in numbers) {
//       if (numbers[num] % 2 == 0) {
//         console.log(numbers[num]);
//       }
//     }
//   };
  // getEvenNumbers([1, 2, 3, 6, 8, 10]);
  // getEvenNumbers([1, 2]);
  //===================================================================================
  // 6 array ichidagi nested arraylar yuqotilsin
// const cut = (array) => {
//     let removed = array.flat(Infinity);
//     return removed;
//   };
// console.log(cut([[], [1]])); //=> [1]
// console.log(cut([[3, 2, 1]])); //=> [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]
//=============================================================================
// 7 array ichidagi positive va negative sonlarni alohida qushing
// function sumNumbers(array) {
//     var positiveSum = 0;
//     var negativeSum = 0;
  
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] > 0) {
//         positiveSum += array[i];
//       } else if (array[i] < 0) {
//         negativeSum += array[i];
//       }
//     }
  
//     return {
//       positive: positiveSum,
//       negative: negativeSum,
//     };
//   }
  // console.log(sumNumbers([1, 2, 3, 4, -2, -4, -1]));
  //===========================================================================
  // 8 array ichidagi positive sonlar negativega aylansin va negative sonlar positive sonlarga aylansin.
// const getChange = (array) => {
//     for (i = 0; i < array.length; i++) {
//       if (array[i] > 0) {
//         console.log((array[i] = -array[i]));
//       } else if (array[i] < 0) {
//         console.log(Math.abs(array[i]));
//       }
//     }
//   };
  // getChange([1, 2, 3, 4, 5]);
  // getChange([1, -2, 3, -4, 5]);
  // =========================================================================================================
  
  // 9 asrlarni tugri hisoblaydigan ffunksiya yozing
  // const getCentury = (year) => {
  //   let res = year / 100;
  //   let result = Math.ceil(res);
  //   return result;
  // };
  // console.log(getCentury(1601));
  // console.log(getCentury(1705));
  // =========================================================================================================
  
  // 10 Nomlarni qisqartiring
//   function convertToInitials(fullName) {
//     let names = fullName.split(" ");
//     let initials = names.map((name) => name.charAt(0).toUpperCase());
//     return initials.join(".");
//   }
//   console.log(convertToInitials("Patrick Feenan"));
  