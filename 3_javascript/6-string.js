const name ="akash"
const repocount="2"
console.log(`hlo my name is ${name} my repo count is ${repocount}`);//use backtick

const gamename = new String ('akashsky')
console.log(gamename.length);
console.log(gamename.indexOf('s'));

const newstring = gamename.substring(0, 4)
console.log(newstring);

const anotherstring = gamename.slice(-8, 1)
console.log(anotherstring); //for -ve

const newString1 = "   asdf   "
console.log(newString1);
console.log(newString1.trim());//to remove empty space

const url ="https://akash.com/as%20kl"
console.log(url.replace('%20','_')); //replace in url
console.log(url.includes('akash'));//search
console.log(url.includes('kumar'));





