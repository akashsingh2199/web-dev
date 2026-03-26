const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance);//op in Number

console.log(balance.toString().length);//convert in string
console.log(balance.toFixed(2));//digit after desimal

const otherNumber = 123.456
console.log(otherNumber.toPrecision(4)); //to get round off or presition value

const hundreds  = 1000000
console.log(hundreds.toLocaleString()); //add comma in b/w 

//      MATHS   
console.log(Math);
console.log(Math.abs(-4));//absalute value
console.log(Math.round(4.6));//round off
console.log(Math.floor(4.6));// high round off
console.log(Math.ceil(4.6));//low round off

console.log(Math.random());//o to 1 random value
console.log((Math.random()*10)+1);//to get higher than 1//+1 to get min atleast 1 not 0

//generate random value bw any two no 

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min + 1))+min);






