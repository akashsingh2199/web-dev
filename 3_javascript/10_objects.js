// singleton 
//object.creat2

//object literals

const JsUser = {  //{}=this is object
    name : "akash",
    age: "22",
    location : "kolkata",
    isloggedin: false,
    lastlogin: ["mon","sun"]
}
console.log(JsUser.name);//we can do this too 
console.log(JsUser["name"]); //but this one is best 
JsUser.email="akash@gmail.com" //add or update

//Object.freeze(JsUser)//no further
JsUser.email="sky@gmail.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("hloo");
}
console.log(JsUser.greeting);//funtion not execute ,give referance
console.log(JsUser.greeting());//function execute
JsUser.greetingone = function() {
    console.log(`hloo ${this.name}`); //this use to get reference from object 
}
console.log(JsUser.greetingone());
