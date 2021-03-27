const money = 50

let food = money > 100 ? "Biriyani": "Sadhavhat"
console.log(food);

// Short Cut Else If

const money1 = 70
let food1;

if (money1 > 50) {
    food1= 'tea with bread'
}else{
    food1 = 'only a cup o tea'
}
console.log(food1);

// with ShortCut
//Important Note:  First Condition then ?(question Symbol) then truthy Value and then :(colon) and last falsy Value
let food3 = money > 50 ? 'Tea with bread': 'Only Cup of tea'
console.log(food3);

// Function if Else

const active = true

// let cssClass = active? 'Active':'inactive'
// console.log(cssClass);

function displayUser(){
    console.log("i am active");
}
function closeUser(){
    console.log("i am not active");
}
let findActive = active ? displayUser():closeUser();
console.log(findActive);

// One Line
const stay = false

let show = stay && 5
console.log(show); 

// String to Number

const number = +"45"
console.log(number);

// number to String
const num = 46 + ''
console.log(typeof num);

// Function default VAlue
function add (num1, num2){
    num2 = num2 || 20
    return num1 + num2;
}
const result = add(12, 30)
console.log(result);