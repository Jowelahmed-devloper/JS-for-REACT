// Variable
// Using Let
let money = 20
money = 12
console.log(money);
// Using Const 
const name = "Jowel Ahmed"
const name2 = "Rasel"
console.log(name2);

// If Else Condition

const jobPaicho = false
const saveMoney = 40000
const business = false

if(jobPaicho == true || saveMoney > 30000){
    console.log('wow great you are');
}
else if(business ==true){
   console.log('you are also great');
}
else{
    console.log('we are same dude');
}

// Template String
const loveLetter = `Hello praner priyo,
ami tomay khub valobashi.
tmi amr jan
amr pran`

console.log(loveLetter);

// object Variable

const BD = {
    fullName:'Bangladesh',
    population:16000000,
    area:147570,
    capital:'Dhaka'
}
const fullDetails =`this country name is  ${BD.fullName} its population ${BD.population} its area is ${BD.area} and its capital is ${BD.capital}`
console.log(fullDetails);
// Regular Function
function sum (x, y){
    return x+y;
}
const result = sum(5,6)
console.log(result);

// Arrow Function
const sub= (x)=>x*2

console.log(sub(5));
// Arrow Function in Multiline

const sumOfNumbers = (p,q)=>{
    return p*q;
}
console.log(sumOfNumbers(3, 4));