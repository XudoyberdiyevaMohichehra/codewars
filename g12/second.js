//===================================================================================================
// 1.
const binaryArrayToNumber = arr => {
    let res = '';
     res = arr.join("")
     return res = parseInt(res, 2)
    
};
console.log(binaryArrayToNumber([0, 1, 0, 1]));