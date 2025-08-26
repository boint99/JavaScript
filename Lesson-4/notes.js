/**
- javaScript là ngôn ngữ được định kiểu dữ liệu linh hoạt (dynamic), Điều này sẽ rất tiện lợi nhưng lại cũng đồng
nghĩa với viêc dễ sảy ra bug nhưng phát sinh trong quá trình development nếu bạn chưa nắm được rõ cốt lỗi
về các kiểu dữ liệu.
*/

let x // Now x is undefined
x = 7 // Now x is number
x = 'abc' // Now x is string
x = true // Now x is boolean
x = null // Now x is null
x = undefined // Now x is undefined
console.log(x)
console.log("===============================")

console.log('Primitive types')
let username = 'Tiểu Bối'
let usernameCopy = username
usernameCopy = 'Tiểu Bối - Học Dev'
console.log('username: ', username)
console.log('usernameCopy: ', usernameCopy)
// Giá trị usernameCopy không làm thay đổi của giá trị username
console.log("===============================")
console.log('Reference types')
let objectA = {username: 'Tiểu Bối'}
let objectB = objectA
objectB.username = 'Tiểu Bối - Học Dev'
console.log('objectA: ', objectA)
console.log('objectB: ', objectB)
// Giá trị objectB đã làm thay đổi của giá trị objectA
console.log("===============================")