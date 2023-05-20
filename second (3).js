// 13.05.2023   3/10

// 1. ?>!*/ => soz ichida  shu kabi belgilar bittadan oshsa false oshmasa true qaytaradigan funksiya yozing

// function UniqueChar(str){
//     let ar =["?", ">", "!", "*", "/"];
//     let count = 0;
//     for(v of str){
//         if(ar.includes(v)) count++;
//     }

//     return count > 1 ? false : true;
// }

// console.log(UniqueChar("n?Aa+"));
// console.log(UniqueChar("n?Aa+"));

// =========================================================================================================



// 2 Array ichidagi raqamlardan quyidagi ko'rinishdagi so'z qaytsin
// function switcher(x) {
//
// }
// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); =>' codewars'
// console.log(switcher([ '26', '9', '22'])); => 'are'

// const switcher = (ar) => {
//     let str = ar.map(value => String.fromCharCode(26-(+value) + 97))
//     return str.join("")
// }

// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
// console.log(switcher([ '26', '9', '22']))
// ============================================================================



// 3. str ichidagi sozlarni oxirgi harfiga qarab alifbo tartibida joylashtiring

// last('man i need a taxi up to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

// const last = (str) => {
//     let res = str.split(" ");
//     return (res.sort((a,b) => a[a.length-1].localeCompare(b[b.length-1])));
// }

// console.log(last('man i need a taxi up to ubud'));
// =========================================================================================================



// 4 dasturlash tillarini o'sish tartibiiga kora tertiblang. lekin ular 60 dan kam kursatgichga ega bulsa kursatilmasin

// myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }) => ["Ruby", "Python"]
// myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }), => ["Dutch", "Greek", "Hindi"]
// myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }), => []

// const myLanguages = (data) => {
//     let res = []
//     for(i in data){
//         if(data[i] >= 60){
//             res.push([i, data[i]])
//         }
//     }
//     res = res.sort((a, b) => b[1] - a[1])
//     return res.map(value => value[0])
// }

// console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }))
// =========================================================================================================




// 5 array ichidagi faqat juft sonlar qaytsin

// getEvenNumbers([1, 2, 3, 6, 8, 10]), =>[2, 6, 8, 10]
// getEvenNumbers([1, 2]),=> [2]

// const getEvenNumbers = (numbers) => {
//     return numbers.filter(value => value % 2 == 0)
// }

// console.log(getEvenNumbers([1, 2]));
// =========================================================================================================



// 6 array ichidagi nested arraylar yuqotilsin

// cut([[], [1]]),=> [1]
// cut([[3, 2, 1],=> [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const cut = (ar) => {
//     return ar.flat(Infinity)
// }

// console.log(cut([[], [1]]));
// =========================================================================================================



// 7 array ichidagi positive va negative sonlarni alohida qushing

// Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// const sum = (ar) =>{
//     let sum1 = 0;
//     let sum2 = 0;
//     let res = [];
//     for(value of ar){
//         if(value > 0){
//             sum1 += value;
//         } else if(value < 0){
//             sum2 += value;
//         }
//     }
//     res.push(sum1);
//     res.push(sum2);

//     return res
// }

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// =========================================================================================================



// 8 array ichidagi positive sonlar negativega aylansin va negative sonlar positive sonlarga aylansin.

// convert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5]
// convert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5]

// const convert = (ar) => {
//     return ar.map(value => -value)
// }

// console.log(convert([1, -2, 3, -4, 5]));
// =========================================================================================================



// 9 asrlarni tugri hisoblaydigan ffunksiya yozing

// asr(1601), => 17
// asr(1705), => 18

// const asr = (num) => {
//     return parseInt(num/100) + 1;
// }

// console.log(asr(1705))
// =========================================================================================================


// 10 Nomlarni qisqartiring

// Shorten("Sam Harris"), => "S.H"
// abbrevName("Patrick Feenan"), => "P.F"

// const shorten = (str) => {
//     let res = str.split(" ");
//     const [ism, familiya] = res;
//     return (`${ism[0]}.${familiya[0]}`);
// }

// console.log(shorten("am Harris"))