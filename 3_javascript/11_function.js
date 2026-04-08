function akash (num1 , num2) {
    console.log(num1+num2);
    
}
akash(5,6)

function sum (num3,num4) {
    //let result = num3+num4
    //return result 
    //or
    return num3+num4
}
let result1 = sum(3,5)
console.log(result1);

function userlogin (username) {
    if (username === undefined) {
        console.log("plz enter user name");
        return //after return next lines are not exicute
    }
    return `${username} just log in`
}
//console.log(userlogin("akash"));
console.log(userlogin());

function calculatecartprice (...n1) { //... array bana ke bhej dega
    return n1
}
console.log (calculatecartprice(5,8,9))

const user = {
    username: "akash",
    price : 234
}
function object (anyobject) {
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}` );

    
}
object(user)