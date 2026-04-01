const tinderuser = {}//object formed
tinderuser.id = "asdfg"
tinderuser.name ="sky"
tinderuser.login = false
console.log(tinderuser);

//nested object 
const user={
    id : "akash1 ",
    name: {
            fullname : {
                firstname: "akash",
                lastname: "kumar"
            }
    }
}
 console.log(user.name.fullname.lastname);
 
const akash ={
    1:"s",2:"d"
}
const akash1 ={
    3:"h",4:"j"
}
const akash3 = Object.assign({},akash,akash1)//merge 
console.log(akash3);

const akash4= {...akash,...akash1}
console.log(akash4);//same as array

console.log(Object.keys(tinderuser))//to get key 
console.log(Object.values(tinderuser))//to get value
console.log(Object.entries(tinderuser))

//object de-structure
const {login : userlogin} = tinderuser //apne hisab se naam change karna = de-structure
console.log(userlogin);
console.log(tinderuser.login);//dono tarika valide rhega

//json format

{
    name: "akash kumar "
    branch : "ece"
}
//      dono type se json ho sakta hai
[
    {},
    {},
    {}
]