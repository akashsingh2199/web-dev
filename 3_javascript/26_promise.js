const promiseone = new Promise(function(resolve,reject) {
    //do an async task
    //db calls cryptography ,network
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
}) //promise created 

promiseone.then(function() {
    console.log('promise consumed');
    
})

new Promise (function(resolve ,reject) {
    setTimeout(function() {
        console.log('async task 2');
        resolve()
    },1000)
}).then(function() {
    console.log('async 2 resolved');
    
}) 

const promisethree = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username : 'chai',email : "as@gmail.com"})
    },1000)
})
promisethree.then(function(user) {
    console.log(user);
    
})

const promisefour = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error=false;
        if (!error) {
            resolve({user:"akash",email:'asdf@gmail.com'})
        }else {
            reject('something is wrong')
        }
    },1000)
}) 
  promisefour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error) {
    console.log(error);
    
}).finally(()=>console.log('the promise is either resolved or rejected')
)

const promisefive = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({user:"akash singh",email:'sky@gmail.com'})
        }else {
            reject('something is wrong')
        }
    },1000)
})
async function consumepromisefive(){
    try {const response = await promisefive 
    console.log(response);}
    catch(error) {
        console.log(error);
        
    }
    
}
consumepromisefive()    

//example1
async function getAllUsers () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response. json ()
    console. log (data);
    } catch (error) {
    console. log ("E: ", error) ;
    I

    }
}

getAllUsers ()

//example2
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
    
})
.then((data) => {
    console.log(data);
    
})
.catch((error)=> console.log(error));
