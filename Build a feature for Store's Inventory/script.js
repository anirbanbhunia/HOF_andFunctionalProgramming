const storeList = {Item1:480,Item2:40,Item3:560,Item4:11,Item5:36,Item6:734,Item7:200,Item8:180}
console.log("price in USD:",storeList)

let convertPrice = function convert(val){
    return val*80
}

const storeListInInr = Object.fromEntries(
    Object.entries(storeList).map(([item,price])=>[item,convertPrice(price)])
)
console.log("price in INR:",storeListInInr)