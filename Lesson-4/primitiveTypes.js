/*
Nhóm các kiểu dữ liệu nguyên thủy - Primitive Type
- Các giá trị Primitive nguyễn thủy được lưu trữ trực tiếp trong nhắn xếp (stack)
- khi một giá trị Primitive được gán một biến, một bản sao độc lập của giá trị
đí sẽ được tạo ra
- Khi thay đổi giá trị của biến, có bản sao độc lập của giá trị đó sẽ được tạo ra.
Primitive Type bao gồm các kiểu dữ liệu phổ biến sau:
*/

// number: Đại ddienj cho các số, bao gồm cả số nguyên và số thập phân
let age = 18
let productPrice = 10.99
console.log("age", age)
console.log("age", typeof age)
console.log("productPrice", productPrice)
console.log("productPrice", typeof productPrice)
console.log("===============================")

// String: Đại diện cho các chuổi ký tự
let username = 'Tiểu Bối Học dev'
console.log('username: ', username)
console.log('username: ', typeof username)
console.log("===============================")

//Boolean: Đại diện có các giá trị đúng và sai
let isAvailable = true
console.log('isAvailable: ', isAvailable)
console.log('typeof isAvailable: ', typeof isAvailable)
let isFree = false
console.log('isFree: ', isFree)
console.log('Type isFree',typeof isFree)
console.log("===============================")

//Null: Đại diện cho các giá trị kiểu rỗng hoặc không có gì
let nullValue = null
console.log('NullValue',nullValue)
console.log('Type NullValue - return object',typeof nullValue) // không dùng
console.log('Type NullValue - return true', nullValue === null) // Nên dùng
console.log("===============================")

// Undefined: Đại diện cho 1 bến chưa gán giá trị
let undefinedValue
console.log('undefinedValue',undefinedValue)
console.log('Type undefinedValue', typeof undefinedValue) // Nên dùng
console.log("===============================")

// Symbol (xuất hiện từ ECMASCRIPT 6 - ES6): Đại diện chi một giá trị Unique: độc nhất
// và biến, thường được sử dụng làm khóa chính hoặc id cho dối tượng - Objects.
let unique = Symbol('id-123-abc')
console.log('unique: ', unique)
console.log('typeof unique: ', typeof unique)
console.log("===============================")

//BigInt (Xuất hiện từ ECMASCRIPT 2020 - ES2020): đại diện cho các số nguyên có giá trị
// kiểu Number thông thường ở trên.
let bigNumber1= BigInt(999999999999999999)
let bigNumber2= 98888888888888888888n
console.log('bigNumber1: ', bigNumber1)
console.log('typeof bigNumber1: ', typeof bigNumber1)
console.log('bigNumber2: ', bigNumber2)
console.log('typeof bigNumber2: ', typeof bigNumber2)