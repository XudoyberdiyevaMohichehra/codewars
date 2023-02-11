// for (var i = 0; i < 10; i++) {
//     var one = 1;
// }
  
//   console.log(i);  
//   console.log(one); 





// Ways to create IIFE

// (function() {
//     alert("Parentheses around the function");
//   })();
  
//   (function() {
//     alert("Parentheses around the whole thing");
//   }());
  
//   !function() {
//     alert("Bitwise NOT operator starts the expression");
//   }();
  
//   +function() {
//     alert("Unary plus starts the expression");
//   }();










//   function sayHi() {
//     if (true) {
//       var phrase = "Hello";
//     }
  
//     alert(phrase);
//   }
  
//   sayHi();
//   console.log(phrase); 


// /**************************************************************************************************** */

// new Map 1 consolega nima javob chiqadi

// let map = new Map();

// map.name = 'web';

// console.log(map);

// console.log(map.get('name'));

// 2. mapda yaratilgan objni oddiy obyektga ozgartirish qanday boladi?

// let map = new Map([['name','webbrain'], ['title', 'it center']])
// console.log(Object.fromEntries(map))

// 3 next() nima vazifani bajaradi?
//  let gen = map.entries()
//  console.log(gen.next())
//  console.log(gen.next())
//  console.log(gen.next())

// let arr = [1,2,3,4,2,5]
// let arr2 = new Set(arr)
// console.log(arr2);

// for (var i = 0; i < 3; i++) {
//     // console.log(i);
//   setTimeout(()=> console.log(i), 3000)
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i), 1)
//   }

// function getNumber(a = 0, b = 1) {
//   return b;
// }
//   console.log(getNumber(3) * 3);

// console.log(Number.isInteger(12));
// console.log(Number.parseFloat(12));
// console.log(Number.parseInt(12));
// console.log((12).toFixed());

// console.log(false && 'he');
// var x;
// if (!x) {
// console.log(x ? 'webbrain' : 'academy');
// } 
// if (x) {
// console.log(!x ? 'IT' : 'academy')
// }

// let num = 5
// console.log(num.toString(2));
  
// let obj = {name: 'web'}
// let w =Object.entries(obj);
// console.log(w);
// console.log(Object.fromEntries(w));

// let students = [
//   {name:'malika', title: 'student' },
//   {name:'malika', title: 'student', id : 1 },
//   {name:'malika', title: 'student', id : 2},
//   {name:'malika', title: 'student', id : 3},
//   {name:'malika', title: 'student', id : 4},
// ]

// const getUpdate =(data) =>{
//   let res = students.map((v)=>v.id === data.id ? {...v, [data.type] : data.v} : v)
//   students = res
// }
// getUpdate({id:2, type:'name', v: 'kulll'})
// console.log(students);

// console.log(`${2}+${2}` * 3)
// var STR = 'W3BBRA1N IS NUMBER 1'
// let sum =0;
// for(char of STR){
//  if (char == 'number') {
//   sum += char
//  }else{
//   console.log(char);
//  }
// }

// function getsum() {
//   for(char of STR){
//   return sum += +char
// }
// // return sum
// }
// console.log(getsum());

// var str = '2d1f


// for(let i=0; i< str.length; i++){

//     if(+str[i] == str[i]){
//         sum += parseInt(str[i])
//     }
// }


// for(char of str){
//   if(+char == char) sum += parseInt(char)
// }

// console.log(sum)

// const obj = {
//   name: 'WebBrian',
//   surname: 'Academy',
//   status: 'IT',
//   };
//   const status = 'name'
//   console.log(obj.status);

// for (let i of obj) {
//   console.log(i);
//   }
  
// const obj = {
//   name: 'WebBrian',
//   surname: 'Academy',
//   status: 'IT',
//   };
//   console.log( Object.values(obj));
  // Object.values(obj)
  // .map(([value, key], index) => {
  // console.log(value);

  // });



  // const students = [
  //   { name: 'Eshmat', surname: 'Eshmatov', status: 'student' },
  //   { name: 'Toshmat', surname: 'Toshmatov', status: 'student' },
  //   { name: 'Gulmat', surname: 'Gulmatov', status: 'student' },
  //   { name: 'Holmat', surname: 'Holmatov', status: 'student' },
  //   ];
  //   const search =(input)=>{
  //   let res = students.filter((v)=>v.name.toLocaleLowerCase().includes(input)) 
  //   return res
  //   }
  //  console.log( search('esh'));

  console.log('started...');
new Promise((reject, resolve) => {
reject('Welcome to facebook');
}).then((value) => console.log(value));
console.log('finished...');
