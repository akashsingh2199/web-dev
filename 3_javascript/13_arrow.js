const user = {
    username :"akash",
    price : 345,
    welcomemsg : function() {
        console.log(`${this.username} , welcome to website `);
        console.log(this);
        
    }
}
user.welcomemsg()

const chai = () => {
    username :"akash"
    console.log(this);
    
}
chai()

//arrow fanction ()=>{}
const add = (n1,n2) => {   //{} ye use hoha to return karna parega
    return n1+n2
}
console.log(add(3,4));
//short way to use arrow function
const addtwo = (n3,n4) => (n3 + n4)
console.log(addtwo(5,6));

//iife ()() to exicute 
((name) => {
    console.log(name);
    
})("akash")

// ?? use to avoid empty value
let val1 = null ?? undefined ?? 48
console.log(val1);


for ( let i =0 ; i<10; i++) {
    let row =" "
    for (let j = 0;j<=i;j++) {
        row = row + "*"
    }
    
    console.log(row);
    

}