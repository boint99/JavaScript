/*
=> có khá nhiều method - Phương thức khi sử lý dữ liệu object trong javaScirpt.
=> Có các phương thưc: create(), assign(), defineProperty(), defineProperties(), keys(), value(), endtries(), fromEntries()
*/

// => object.create(): tạo là đối tượng mới dựa trêm đối tượng trước làm nguyễn mẫu  - prototype
const person = {
    greet() {
        console.log('Hi')
    }
}
const createObj = Object.create(person)
createObj.name = ' Tiểu Bối'
createObj.greet()
console.log('object.create(): ', createObj.name)
console.log('========================================')
// => object.assign(): sao chép tất cả các thuộc tính 1 hoặc nhiều đối tượng nguồn ban đầu vào đối tượng đích. Kết quả trả về
//đối tượng đích
// - Nếu một thuộc tính đẫ tôn tại trong đối tượng đích thì nó sẽ ghi đè.
// - Phương thức này sẽ làm thay đổi đối tượng đích, ko làm thay đổi đối tượng nguồn
const targetObj = {a: 1, b: 2};
const originalObj = { b: 4, c: 5}
const result = Object.assign(targetObj, originalObj)
console.log('object.assign(): ', result) //  { a: 1, b: 4, c: 5 }
console.log('object.assign(): ', originalObj) //  { b: 4, c: 5 }
console.log('object.assign(): ', targetObj) // { a: 1, b: 4, c: 5 }
console.log('========================================')

// => object.defineProperty(): thêm hoặc sửa một thuộc tính trên 1 đối tượng, và có thể kiểm soát chính sác hành vi của thược tính đó.
const obj1 = {}
Object.defineProperty(obj1, 'name', {
    value: 'Tiểu Bối',
    writetable: false // Ko cho phép thay đổi giá trị
})
console.log('object.defineProperty(): ', obj1.name)
obj1.name = 'Một lập trình viên' // Ko có tác động vì writable: false
console.log('object.defineProperty(): ', obj1.name) //Một lập trình viên

// => object.defineProperties():  thêm hoặc sửa nhiều thuộc tính trên 1 đối tượng, và có thể kiểm soát chính sác hành vi của thược tính đó.
const obj2 = {}
Object.defineProperties(obj2, {
    firsName: {
        value:  'Bối',
        writable: true,
    },
    lastname: {
        value: 'dev',
        writable: false,
    }
})

console.log('object.defineProperties():', obj2.firsName)
console.log('object.defineProperties():', obj2.lastname)
obj2.firsName = 'Nguyễn'
obj2.lastname = 'Bối'
console.log('object.defineProperties():', obj2.firsName)
console.log('object.defineProperties():', obj2.lastname)
console.log('========================================')
// => object.keys():c
const object3 = { a:1, b:2, c:3}
console.log('object.keys():', Object.keys(object3)) // array: [ 'a', 'b', 'c' ]
// => object.value():  Trả về một mảng (array) chứa toàn bộ các giá trị thưộc tính của dối tượng.
const object4 = { a:1, b:2, c:3}
console.log('object.value():', Object.values(object4)) // array:  [ 1, 2, 3 ]

// => object.endtries(): Trả về một mảng gôm các cặp [key, value]ư cảu các thuộc tính của dối tượng
const object5 = { a:1, b:2, c:3}
console.log(' object.endtries(): ', Object.entries(object5)) // array:  [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// => object.fromEntries(): Chuyển đổi một  mảng các cặp [key, value] thanh một đối tượng. ngược lại của Object.entries
const object6 =[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log('object.fromEntries(): ', Object.fromEntries(object6)) // array:    { a: 1, b: 2, c: 3 }