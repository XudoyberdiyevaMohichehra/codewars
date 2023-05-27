//1. array ichida berilgan sonlarni ikkiga kuppaytiruvchi funksiya yozing.

// For example:
// [1, 2, 3]-- > [2, 4, 6]


// 2. stringni teskariga aylantiring.

// For example:
// 'world'  => 'dlrow'
// 'word'   => 'drow'
// solution('world'), => 'dlrow';

// 3.shart: array ichidagi valuelar length ga qarab joylashtirish.

// For example
// Order(["Bozor", "Stakan", "Ko'z", "   Muzlatkich"])

// Your function would return the following array:
// Order(["Ko'z", "Bozor", "Stakan", "Muzlatkich"])

// 4. bo'sh joylaarni olib tashlaydigan  funksiya yozing

// Examples:
// Input -> Output
// Get("8 j 8   mBliB8g  imjB8B8  jl  B") -> Get("8j8mBliB8gimjB8B8jlB")

// 5.Arifmetik amallarni bajaruvchi funksiya yozing.

// solve('+', 4, 7) => 11;
// solve('-', 15, 18) => -3;
// solve('*', 5, 5) => 25;
// solve('/', 49, 7)=>  7;

// 5.Arifmetik amallarni bajaruvchi funksiya yozing.

//     solve('+', 4, 7) => 11;
// solve('-', 15, 18) => -3;
// solve('*', 5, 5) => 25;
// solve('/', 49, 7)=> 7;

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



// 13.05.2023   3/10

// 1.

// function hasUniqueChars(str){
//     return new Set(str).size === str.length

// }

// console.log(hasUniqueChars("n??Aa++"));

// 2
// var str = ' zyxwvutsrqponmlkjihgfedcba!? '
// function switcher(x) {
//   return x.map((vl)=> {return str[vl]}).join('')
// }

// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));


// 13.05.2023   3/10

// 1. ?>!*/ => soz ichida  shu kabi belgilar bittadan oshsa false oshmasa true qaytaradigan funksiya yozing

// function UniqueChar(str){
//
// }

// console.log(UniqueChar("n??Aa++")); false
// console.log(UniqueChar("n?Aa+")); true

// =========================================================================================================

// 2 Array ichidagi raqamlardan quyidagi ko'rinishdagi so'z qaytsin
// function switcher(x) {
//
// }
// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); =>' codewars'
// console.log(switcher([ '26', '9', '22'])); => 'are'

// =========================================================================================================
// 3. str ichidagi sozlarni oxirgi harfiga qarab alifbo tartibida joylashtiring

// last('man i need a taxi up to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

// =========================================================================================================
// 4 dasturlash tillarini o'sish tartibiiga kora tertiblang. lekin ular 60 dan kam kursatgichga ega bulsa kursatilmasin

// myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }) => ["Ruby", "Python"]
// myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }), => ["Dutch", "Greek", "Hindi"]
// myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }), => []

// =========================================================================================================

// 5 array ichidagi faqat juft sonlar qaytsin

// getEvenNumbers([1, 2, 3, 6, 8, 10]), =>[2, 6, 8, 10]
// getEvenNumbers([1, 2]),=> [2]

// =========================================================================================================

// 6 array ichidagi nested arraylar yuqotilsin

// cut([[], [1]]),=> [1]
// cut([[3, 2, 1],=> [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]

// =========================================================================================================

// 7 array ichidagi positive va negative sonlarni alohida qushing

// Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// =========================================================================================================

// 8 array ichidagi positive sonlar negativega aylansin va negative sonlar positive sonlarga aylansin.

// convert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5]
// convert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5]

// =========================================================================================================

// 9 asrlarni tugri hisoblaydigan ffunksiya yozing

// asr(1601), => 17
// asr(1705), => 18

// =========================================================================================================

// 10 Nomlarni qisqartiring

// Shorten("Sam Harris"), => "S.H"
// abbrevName("Patrick Feenan"), => "P.F"


