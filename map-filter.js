const products =[
    {id:1, Name:"Laptop", price:500},
    {id:2, Name:"Mobile", price:200},
    {id:3, Name:"watch", price:80},
    {id:4, Name:"tablet", price:60},
]
// MAP
const prices = products.map(price=>price.price)
console.log(prices);
// For Each
products.forEach(product => {
    console.log(product.price);
});
// Filter
const isRemaining = products.filter(pd=>pd.id!=2)
console.log(isRemaining);
const cheap =products.filter(pd=>pd.price<100)
console.log(cheap);

// Find
const hasWatch = products.find(pd=>pd.Name==='watch');
console.log(hasWatch);