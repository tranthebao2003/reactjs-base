var array = ['a', 'b', 'c']

// Destructuring cho mảng dùng []
// var [a, b, c] = array
// console.log(a, b, c)
// array2 = [1,2,3]
// // ko lấy thằng b
// var [a, , c] = array2 
// console.log(a, c)

// var[a, b, ...rest] = array
// console.log(rest)

// Destructuring cho object {}

var courses = {
    name: 'Javascript',
    price: 10000
}

// với object thì phải dúng key chứ ko đc đặt lung tung a, b, c như mảng
var {name, price} = courses
console.log(name,price)

function logger (...params){
    // params sẽ trả về cái mảng
    console.log(params)
}

logger(1,2,3,4,5)