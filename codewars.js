// function evenOrOdd(number) {
//  let a = number % 2 == 0 ?  'Even': 'Odd'; 
//   return a
// };
// console.log(evenOrOdd(12));

// function sameCase(a) {
//      return [1, 0] [a];
// }
// console.log(sameCase());

// function changeStars(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j+=2) {
//             console.log(`"*" * 3`);  
//         }
//         console.log("*");
//     }
// }
// changeStars(5);


// function positiveSum(arr) {
//  let res = 0;
//  for (let i = 0; i < arr.length; i++) {
//    arr[i] > 0 ? res += arr[i] : res += 0;
//  }
//  return res
// }
// console.log(positiveSum([1,-4,7,12, 13]));



// function makeNegative(num) {
//     if (num > 0 ) {
//         console.log(~num + 1);
//     }else if(num <= 0 ){
//         console.log(num);
//     }
//   }
//   makeNegative(0.8);
  


// function makeNegative(num) {
//     let result = num === 0 ? 0 : Number("-" + num) 
//     let res = num <= 0 ? num : Number("-" + num)
//     result = res
//     return  result
// }
// console.log(makeNegative(0.9));


// let makeNegative = (num) => {var x = num;  return ~x+1;}
// console.log(makeNegative(0));


const num = "23456765432456";
const r = num["length"]
const ar = num.length
console.log(r);
console.log(ar);
