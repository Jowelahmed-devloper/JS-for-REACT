const money = 50

let food = money > 100 ? "Biriyani": "Sadhavhat"
console.log(food);

// Short Cut Else If

const money = 70
let food;

if (money > 50) {
    food= 'tea with bread'
}else{
    food = 'only a cup o tea'
}
console.log(food);

// with ShortCut
//Important Note:  First Condition then ?(question Symbol) then truthy Value and then :(colon) and last falsy Value
let food = money > 50 ? 'Tea with bread': 'Only Cup of tea'
console.log(food);