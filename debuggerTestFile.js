var arr = [1,2,3,4,5,6,6,7];

var arr2 = [...arr, 7,8,9,0,1];


debugger


var arr3 = arr + arr2;

var arr4 = [...arr, ...arr2];

console.log(arr, arr2, arr3, arr4);