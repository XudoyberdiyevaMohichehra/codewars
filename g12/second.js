//===================================================================================================
// 1. binary sonlarni decimal sonlarga aylantiring.

// const binary = arr => {

// };
// console.log(binary([0, 0, 0, 1])); => 1
// console.log(binary([0, 1, 0, 1])); => 5


//===================================================================================================
// 2. so'z ichidagi unli harflar miqdorini hisoblang

// function Unli(str) {
//
// }
// console.log(Unli('satr')); => 1


//===================================================================================================
// 3. eng qisqa so'zlar  miqdorini hisoblang

// function findShort(s) {

// }
// findShort("Let's travel abroad shall we"), => 2
// findShort("turns out random test cases are easier than writing out basic ones") => 3


//===================================================================================================
// 4. dublicate sonlarni qaytaring.

// function duplicates(arr) {
//
// }
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"] ==> [4, 3, 1]
// [0, 1, 2, 3, 4, 5] ==> []

//===================================================================================================
// 5. Eng kichkina miqdorni olib tashlang.

// * Input: [1, 2, 3, 4, 5], output = [2, 3, 4, 5]
// * Input: [5, 3, 2, 1, 4], output = [5, 3, 2, 4]
// * Input: [2, 2, 1, 2, 1], output = [2, 2, 2, 1]




// **************************************************************************************************************
// **************************************************************************************************************

//                    1-masala
// birary sonlarni decimal sonlarga o'zgartiring

// function binary (str){
//      res=str.join("");
//    return console.log(parseInt(res,2));
// }
// binary([0,1,0,1])
// binary([0,0,1])

// ========================================================================
//                    2-masala
// so'z ichidagi unlilar miqdorini hisoblang

// function unlilar(str){
//     let res =0
//     for (i of str) {
//         if (i == "a" && i == "e" && i == "i" && i == "u" && i=="o"){
//            res++
//         }
//     }
//     console.log(res);
// };
// unlilar("axmad")
// ========================================================================
//                    3-masala
// eng qisqa so'zlar miqdorini hisoblang


// ========================================================================
//                    4-masala
// dublicate sonlarni qaytaring
// [1,2,4,4,3,3,1,5,3"5"]  [4,3,1]
// [0,1,2,3,4,5]  []
// function dublicate(arr) {
//     return arr.filter((value,index)=>
//     arr.indexOf(value) !== index)
// }console.log(dublicate([1,2,4,4,3,3,1,5,3,"5"]));
// ========================================================================
//                    5-masala
// eng kichkina miqdorni olb tashlang
// [1,2,3,4,5] [2,3,4,5]
// [5,3,2,4,1] [5,3,2,4]
// [2,2,1,2,1] [2,2,2,1]

// function kichik(ar){
//          var array = [];
//          var min = Math.min(...ar)
//  for(var i=0;i<ar.length;i++){
//   if(ar[i]>min){
//     array.push(ar[i])
//   }
//  }

// console.log(array);
// }
// kichik([2,2,1,2,1])