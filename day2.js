// Map
const products =[
    {Name:'Laptop', price:500, id:1},
    {Name:'Phone', price:100, id:2},
    {Name:'watch', price:60, id:3}
]
const names = products.map(product=> product.Name)
const prices = products.map(product => product.price)
console.log(names,prices);
// For Each
products.forEach(product => {
    console.log(product.Name);
});

// Filter

// const cheap = products.filter(pd => pd.price<100)
// console.log(cheap);

const remaining = products.filter(pd => pd.id !=3 )
console.log(remaining);
// Find
const hasWatch = products.find(pd=> pd.Name ==='watch')
console.log(hasWatch);

