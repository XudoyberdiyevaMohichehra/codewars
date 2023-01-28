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


// const num = "23456765432456";
// const r = num["length"]
// const ar = num.length
// console.log(r);
// console.log(ar);


// let str = "hello world";
//  arr =  str.split("").reverse().join("");
//  arr.reverse()
//  str1 = arr.join()
//  console.log(arr);

//  function makeReverse(str) {
//     return str.split("").reverse().join("");
//  }
//  console.log(makeReverse("hello world"));


// const makeReverse = (str) => str.split("").reverse().join("");
//  console.log(makeReverse("hello world mohichehra"));



// function solution(str) {
    // res = "";
    // for (let i = str.length -1; i >= 0; i--) {
    //     res += str[i]
    // }
    // return res
// }
// console.log(solution("hello world mohichehra"));




// function numberToString(num) {
    // Return a string of the number here!
//     return num.toString()
//   }
//   console.log(numberToString(55));



// function removeChar(str){
//  let res = str.split('').slice(1, -1).join('')
//   return res
// };
// console.log(removeChar('webbrain'));
 


// function repeatStr (n, s) {
//    return s.repeat(n)
//   }
//   console.log(repeatStr (5, 'web'));

//   function repeatStr (n, s) {
//    let str = "";
//    for (let i = 0; i < n; i++) {
//      str += s
//    }
//     return str
//  }
//    console.log(repeatStr (5, 'web'));


// function abbrevName(name){
// let arr = []
//     arr =  name.slice(0, 1)
//     return arr

// }
// console.log(abbrevName("pet mak"));


// const stringToNumber = function(str){
//     return +str;
//   }
//   console.log(stringToNumber("-2334"));

//   const stringToNumber = (str)=> +str
//   console.log(stringToNumber("-2334"));



// function booleanToString(b){
//    return  `${b}`
// }
//   console.log(booleanToString(true));



// function check(a, x) {
//    return (a.includes(x)) ? true : false
// }
// console.log(check(['apple', 'orange', 'lemon', "kata"], 'lem'));

// let arr = [1,2,3,5]
// arr.splice(3,0,4)
// console.log(arr);



// let company = {
//     sales: [
//       { name: "John", salary: 1000 },
//       { name: "Alice", salary: 1600 },
//     ],
//     development: {
//       sites: [
//         { name: "Peter", salary: 2000 },
//         { name: "Alex", salary: 1800 },
//       ],
//       dev: [
//         { name: "Peter", salary: 2000 },
//         { name: "Alex", salary: 1800 },
//       ],
//       internals: [{ name: "Jack", salary: 1300 }],
//     },
//   };

//   function getsalary(company) {
//     if (Array.isArray(company)) {
//         return company.reduce((sum, current) => sum += current.salary, 0)
//     }else{
//         let res = 0;
//         for(let supdep of Object.values(company)){
//             res += getsalary(supdep)
//         }
//         return res
//     }
//   }
//   console.log(getsalary(company));

// let obj = {one: "one", two:'two', one:'three'}
// console.log(obj);

// function reverseWords(str){
//     return str.split(' ').reverse().join(' ');
//   }


// function ho(params) {
//     return params ? "Ho " + params : "Ho";
// }
// console.log(ho(ho()))

// const stringToNumber = function(str){
//     return +str;
//   }
//   console.log(stringToNumber("-2334"));

//   const stringToNumber = (str)=> +str
//   console.log(stringToNumber("-2334"));


// Array.from(chl).forEach((element, index)=>{
//     if(index % 2 == 0){
//         element.style.color = 'red'
//     }else{
//         element.style.color = 'blue'
//     }
//     // console.log(element);
// })



// function opposite(number) {
//    return (-number)
// }

// console.log(opposite(-9));

// function smash (words) {
//     return ""
//  };

// function smash (words) {
//     return words.join(' ')
//  };
//  console.log(smash (['this', 'is', 'word']));

// function stringToArray(string){
//    return string.split(' ')

// }
// console.log(stringToArray('string qwertttttttr', ));


// function sumMix(x){
//     return eval(x.join("+"))
//   }
// console.log(sumMix(['1', 5]));

// function twoSort(s) {
//     return s.sort()[0].split('').join('***')
//   }
  
// console.log(twoSort(['web', 'web', 'web']));

// function array(arr){
//     return  arr.split(',').slice(1, -1).join('') || null
// }
// console.log(array('1, 2'));
    

// function mango(quantity, price){
//     let res = quantity - Math.floor(quantity / 3)
//     return  (res * price)
// }
// console.log(mango(89, 76));

// function findAverage(array) {
//     return array.length === 0 ? 0 : array.reduce((a, b)=> a + b / array.length, 0) 
// }
//   console.log(findAverage([1,2,3,4]))


// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return args.sort((a,b)=>  a-b )[0]
//     }
//   }
//   let res = new SmallestIntegerFinder()
//   console.log(res.findSmallestInt([1,2,3,4,5,0]));


// function makeUpperCase(str) {
//     // Code here
//     return str.toUpperCase()
//   }
//   console.log(makeUpperCase('str'));

// function reverseWords(str){
//     return str.split(' ').reverse().join(' ')
//   }
// function reverseWords(str){
//     return str.split(' ').reverse().join(' ');
//   }
//   console.log(reverseWords('hello world'));

// function greet(name){
//    return `Hello, ${name} how are you doing today?` 
// }
// console.log(greet('j'));


// let str = ['hiuhn', 'cg']
// console.log(str.reverse());

// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1)
// }
  
// console.log(capitalizeWord('word'));

// function getCount(str) {
//     var vowelsCount = 0;
//     str.split("").forEach(function(x){
//       if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
//         vowelsCount += 1;
//       }
//     });  
//     return vowelsCount;
//   }
 
//  console.log(getCount('olma'));

// function findOdd(A) {
//     var obj = {};
//     A.forEach(function(el){
//       obj[el] ? obj[el]++ : obj[el] = 1;
//     });
    
//     for(prop in obj) {
//       if(obj[prop] % 2 !== 0) return Number(prop);
//     }
//   }


function positiveSum(arr) {
 let res = 0;
 for (let i = 0; i < arr.length; i++) {
   arr[i] > 0 ? res += arr[i] : res += 0;
 }
 return res
}
console.log(positiveSum([1,-4,7,12, 13]));

