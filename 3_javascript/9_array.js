const myarr = [1,2,3,4,5,6,7]

//method

myarr.push(8,9,"akash")
myarr.pop() //last value pop
myarr.unshift(0) // add on 1st place but shift every element not good for system
myarr.shift()// remove 1st element
console.log(myarr);

const newmyarr = myarr.join() //change into string
console.log(newmyarr);
console.log(typeof newmyarr);

//slice , splice
const myarr1=myarr.slice(1,3)//original array not change
console.log(myarr1);
const myarr2=myarr.splice(1,3) //original array change 
console.log(myarr2);
console.log("a ", myarr)//splice change array va






