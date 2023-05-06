// function alphabetOrder(v) {
//     var res = '';
//     for (let i = 97; i < 123; i++)
//         for (let k = 0; k < v.length; k++)
//             if (v[k].toLowerCase().codePointAt() == i)
//                 res += v[k]
//     return res
// }
// console.log(alphabetOrder("Webbrain"));

// function CheckAlphabet(str) {
// const arr = str.split('').sort().join('');;
// return arr;
// }

// console.log(alpha("webmaster"));

// const CheckAlphabet =(str)=>{
//     const arr = str.split('').sort().join('');;
//     return arr;
// }
// console.log(CheckAlphabet("alphabet"));
// // let text = "aELLO WORLD";
// // let code = text.charCodeAt(0);
// // let text1 = "HELLO WORLD1";
// // let code1 = text1.charCodeAt(2);
// // let text = "aELLO WORLD";
// // let code = text.toUpperCase()
// // console.log(code);
// // let code = text.codePointAt(0);
// // console.log(code);
// // console.log(code1);

// let str1 = "webbrain academy"
// let str2 = "webbrain academy"
// function check(str1, str2) {
//     if (str1.includes(str2) && (str1.length === str2.length)) {
//         console.log("0");
//     }
//     else if (str1.includes(str2)) {
//         console.log("1");
//     }
//     else console.log("-1");
// }
// check(str1, str2)

// let str = "webbrain academy"

// function truncate(str, n) {
//     console.log(str.slice(0, n));

// }

// truncate(str, 10)

// let str = "$1200"
// function getCurrency(str) {
//     if (str.startsWith("$")) {
//         console.log(str.slice(1));
//     }
//     else if (str.endsWith("$")) {
//         console.log(str.slice(0, -1));
//     }
// }
// getCurrency(str)

// let str = "webbrain academy"

// function capitilize(str) {
//     let a = str.split(" ")
//     let str1 = ''
//     for (let i = 0; i < a.length; i++) {
//         // console.log(a[i] - 1);
//         a[i] = a[i][0].toUpperCase() + a[i].slice(1)
//         str1 = a[i - 1] + " " + a[i]
//     }

//     return str
// }
// console.log(capitilize(str));

// capitilize(str)

// function capitilize(str) {
//     let a = str.split(" ")
//     let str1 = ''
//     for (let i = 0; i < a.length; i++) {
//         a[i] = a[i][0].toUpperCase() + a[i].slice(1)
//         str1 = a[i - 1] + " " + a[i]
//     }

//     console.log(str1);
// }

// capitilize(str)


function alphabetOrder(v) {
    // let letter = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, S, T, U, V, W, X, Y, Z]
    let letter = 'dfghnm'

    var res = '';
    let value = v.split('')
    for (let i = 1; i < letter.length; i++) {
        if (value == letter) {
           return true;
        }else return false
        
    }
}
console.log(alphabetOrder("dfghnm"));
