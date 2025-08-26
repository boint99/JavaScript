
//Arrow Function (hàm mũi tên): là  một hàm thay thê với cus phap đơn giản hơn nhiều so với hàm biểu thức
//Xuất hiện ở ES6
// lưu ý: arrow function không dùng được biểu thức this

const sayHello =  (a, b) => {
    console.log(`Hello, we are ${a} and ${b}`)
}
sayHello ('Bối', 'Tuyền')