const arr = [1,2,3,4,5]
const arr2 = [6,7,8,9]
//const arr1 = arr.push(arr2)
//console.log(arr1); //o/p in array under array
//console.log(arr1[5][2]); //to get value from arr2

const newarr=arr.concat(arr2)
console.log(newarr); //op is new merge array
//another method 
const newarr1=[...arr,...arr2]
console.log(newarr1);

const arr3=[2,3,4[5,6[7,8]]]
const newarr2=arr3.flat(Infinity) 
console.log(newarr2);

console.log(Array.isArray("akash"));//search array
console.log(Array.from('akash'));//make an array 
console.log(Array.from({name: 'akash'})); //give empty arr

let s1=123
let s2=456 
let s3=789
console.log(Array.of (s1,s2,s3));







