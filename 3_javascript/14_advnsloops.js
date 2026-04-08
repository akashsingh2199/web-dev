//forof use
//["",""]
//[{},{}]
const myarr = [1,2,3,4,5]
for (const num of myarr) {
    //console.log(num );
    
}

const akash = "akash"
for (const char of akash) {
    //console.log("each char of akash",char);
    
}

//maps
const map = new Map() //map use to get unique value
    map.set('in',"india")
    map.set('fr',"france")
    map.set('in',"india")
    //console.log(map);
for (const [key,value] of map) {
    //console.log(key,"=",value);
    
}


//forof not work with object
    
//for object use forin
const JsUser = {  //{}=this is object
    name : "akash",
    age: "22",
    location : "kolkata",
    isloggedin: false,
    lastlogin: ["mon","sun"]
}
for (const key in JsUser) {
    //console.log(`${key} is ${JsUser[key]}`);
    
    //console.log(key, "=",JsUser[key]);
    
}

//forof give direct value but forin give key and value in separate
//FOR in DESCRIPTION       =>     it works for ARRAY and OBJECT but not works on MAP
//FOR of DESCRIPTION      =>     it works for ARRAY and MAP[ key, value] but not works on OBJECT.
//FOR each DESCRIPTION =>     it works for ARRAY, OBJECT and MAP.

//foreach use
const coding = [1,2,3,4,5]
coding.forEach( function (item) {
    console.log(item);
    
} )

coding.forEach( (item)=>{console.log(item);  //by arrow function
})
coding.forEach((item,index,arr)=>{console.log(item,index,arr);
})

const asdf = [
    {
        name : "akash",
        age: 22,
        location : "katihar"
    },
    {
        location : "kolkata",
        isloggedin: false,
        age: 35,
        name : "sky"
    }
]
asdf.forEach((item)=>{console.log(item.location)})
const age1 = asdf.filter(  (data) => data.age>30 && data.name === "sky")
console.log(age1);



//filter oprsn
const num1 =[1,2,3,4,5,6,7,8,9,10] 
const newnum = num1.filter( (num)=>  num>5 ) //have condtn //if use {} then also use return
console.log(newnum);


//map oprtn
const num2 =[1,2,3,4,5,6,7,8,9,10,10] 
const add = num2.map(  ( number) => number+100) 
console.log(add);
//or
const add2 = num2.map(  ( number) => {return number+100})
                .map( ( number)=>number-100) 
                .map( ( number)=>number*100)
                .map( ( number)=>number/100)
                .filter( ( number)=>number>5)//chain use
console.log(add2);


//reduce op
const value = [1,2,3,4,5]
const total = value.reduce(function (accumulator,currentvalue) {return accumulator+currentvalue},0)//here 0 to initiate accumulator
console.log(total);
