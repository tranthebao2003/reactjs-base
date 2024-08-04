// 1. định nghĩa key:value cho Object
// 2. Định nghĩa method cho Object
// 3. Định nghĩa key cho Object dưới dạng biến

var name = 'Javascript'
var price = 1000;

var course = {
    // ý 1.
    name, 
    price,
    // ý 2.
    getName(){
        return this.name
    }
}
var fieldName = 'newname'
var fieldPrice = 'price'

// ý 3.
const courses = {
    [fieldName]: 'javascript',
    [fieldPrice]: 1000
}

console.log(courses) 