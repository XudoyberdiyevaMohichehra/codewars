//=====================================================================================
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


// 1 masala

let binaryNumber = [0, 1, 0, 1, 0, 1]
// console.log('salom');
function decimal(num) {

   let res = +binaryNumber.join('')

   console.log(parseInt(res, 2));
}

// decimal(binaryNumber)

// 2 masala

let Unli = "webbran awkfweosvnkjksv"

let son = 0
function UnliF(str) {
   for (i of str) {
      if (i == "e" || i == 'u' || i == 'i' || i == 'o' || i == 'u' || i == 'o\'' || i == 'a') {
         ++son
      }
   }
   console.log('=>', son);
}
// UnliF('unli')

// 3 masala

let str = 'saSvs Dasdfnqweilf afnwjlevn addnjvjqlnv'

let findShort = (value) => {
   let array = value.split(" ")
   const res = []
   for (i of array) {
      if (i !== '') {
         res.unshift(i)
      }
   }

   let ar = res.sort((a, b) => a.length - b.length)
   console.log(res[0].length)
}
// findShort('str hj jjj sn')

// 4 masala

let arr = [1, 2, 4, 4, 3, 3, 1, 5, 3]
let natija = []

function duplicates(valuues) {
   for (i in valuues) {
      for (j in valuues) {
         if (valuues[i] == valuues[j] && (i !== j)) natija.push(valuues[i])
      }
   }

   let ar = []
   let set = new Set(natija);

   for (n of set) ar.push(n);

   console.log(ar);
}

duplicates([1,4,1,3,3,5,])

// 5.   masala

let raqam = [2, 2, 1, 2, 1]

let res = raqam.sort((a, b) => a - b)

res.shift()

console.log(res);