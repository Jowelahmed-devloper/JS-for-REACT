
// Destructuring
const numbers = [44, 54]
// const [x , y] =[44, 54]
const [x,y] = numbers
console.log(x,y);

// Make Array By Function
 function boxify (num){
     return [num, num+5]
 }
 const boxed = boxify(3)
 console.log(boxed);
// Make Array from a Function
 function makeArray(num1){
     return[num1, num1+4]
 }
 const arr = makeArray(10)
 console.log(arr);

//  Array Destructuring
function createArray(num2){
    return [num2, num2*2]
}
const [box1, box2] = createArray(3)
console.log(box1, box2);
// Object Destructuring

const{name, age} = {id:1, name:'Rahim', age:23}
// const{name, age} = {id:2, name:'Kahim', age:24}
// const{name, age} = {id:3, name:'Jahim', age:25}
console.log(name,age);

// Object destructuring
const {callingSymbol, city} ={callingSymbol:'Jowel AHmed', city:'savar'}
console.log(callingSymbol,city);