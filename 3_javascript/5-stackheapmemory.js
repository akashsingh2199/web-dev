//stack(primitive), heap(non primitive)

//stack
let myYtname="akash"
let anothername = myYtname
anothername="sky"
console.log(myYtname);
console.log(anothername);

//heap
let user1 = {
    email : "asa@gmail.com"

}
let user2=user1
user2.email = "qwe@gmail.com"

console.log(user1.email);
console.log(user2.email);
//stack make copy of data so original remain same
//heap change original data 

