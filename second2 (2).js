// 27.05.2023   4/5

// 1. returnga unique value qaytsin.

// findUniq([0, 0, 0.55, 0, 0]) === 0.55

// let uniqK = null;
// let uniqK1 = null;
// function uniq(items) {
//   items.forEach((elem) => {
//     if (elem == uniqK) {
//       uniqK1 = elem;
//     } else {
//       if (uniqK == uniqK1) {
//         uniqK = elem;
//       }
//     }
//   });

//   return uniqK;
// }

// console.log(uniq([0, 0, 0.55, 0, 0]));
// ============================================================================

// 2 toq valularni tartiblang

// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// ============================================================================

// 3. valuelar yigindisini toping

// function arrPlusArr(arr1, arr2) {
//   let summ1 = null;
//   let summ2 = null;
//   arr1.forEach((elem) => {
//     summ1 += elem;
//   });
//   arr2.forEach((elem) => {
//     summ2 += elem;
//   });
//   return summ1 + summ2;
// }
// console.log(arrPlusArr([-1, -2, -3], [-4, -5, -6]));
// arrayPlusArray([1, 2, 3], [4, 5, 6]), 21
// arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21
// arrayPlusArray([0, 0, 0], [4, 5, 6]), 15
// arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100

// ============================================================================

// 4. valuelar o'rta arifmetigini toping

// function getAverage(arr) {
//   let average = null;
//   arr.forEach((elem) => {
//     average += elem;
//   });
//   return average / arr.length;
// }

// console.log(getAverage([1, 2, 3, 4, 5]));
// (getAverage([2, 2, 2, 2]), 2);
// (getAverage([1, 2, 3, 4, 5,]), 3);
// (getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1)

// ============================================================================

// 5. valuelarni har ikkinchi yani cherez  malumotlarini chiqarib tashlang

// function removeEveryOther(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// removeEveryOther(["Hello", "Goodbye", "Hello Again"]);
// (removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),=> ['Hello', 'Hello Again']);
// (removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),=>  [1, 3, 5, 7, 9]);
// (removeEveryOther([[1, 2]]),=>  [[1, 2]]);
// (removeEveryOther([['Goodbye'], { 'Great': 'Job' }]),=>  [['Goodbye']]);
