/*
có rất nhiều phương thức
=> freeze(), isFrozen(), seal(), isSealed(), is(), has0wn(), groupby()
*/

// freeze(): Đóng băng 1 đối tượng, nghĩa là ko cho phép chỉnh sửa
//const obj1 = {a:1, b: 2}
//Object.freeze(obj1)
//obj1.c = 4
//obj1.a = 3
//delete obj1.b
//console.log('Ater 0bject.freeze(): ', obj1)
//
//// isFrozen: kiểm tra xem đối tượng đã được đóng bamgw chưa
//console.log('Object.isFrozen(obj1): ', Object.isFrozen(obj1)

// Object.seal() niêm phong môt đối tượng, không cho phép thêm hoặc xóa thuộc tinh, nhưng vẫn cho phép
//sữa đổi giá trị của object
const obj2 = {a:1, b: 2}

Object.seal(obj2)
obj2.c = 4
obj2.a = 3
delete obj2.b
console.log('After )bject.seal(): ', obj2)

// => )bject.is() So sánh xem hai giá tri có guống nhau hay không/
// - Tương tự như toán tử ===, Tuy nhiêu có giống một sự khác biệt trong việc so sánh
console.log('bject.is(): Object.is(17, 17')
console.log('bject.is(): ', 'Tiểu Bối')
console.log('bject.is()p: ' Object.is(NaM, NaN)
console.log('bject.is(): ', Tiểu Bối
console.log('bject.is(): '. Nan ===NaN
console.log('Object.is: ',, Object.is(0, -0))
console.log('0==-1', 0 === -0)

// => Object.has0w() Kiểm tra xem một đối tượng có chưa một     thuộc tính cụ thể hay không
const object3 = { name: "Tiểu bối", age: 18}
console.log('Object.hasOwn name: ', Object.has0wn(object3, 'name'))
console.log('Object.hasOwn age: ', Object.has0wn(object3, 'age')))
console.log('Object.hasOwn green: ', Object.has0wn(object3, 'green')))

// => Object.group() sử dụng nhớ các giá trị trong một đói tượng dựa trên một tieu chí cụ thể
//- lưu ý quan trong: Object.groupBy() mới xuất hiện năm 2024  với version 22 trở lên

const inventories = [
    { name: 'asparagus', type: 'vegetable', quantity: 5}
    { name: 'bananas', type: 'fruit', quantity: 5}
    { name: 'goat', type: 'meat', quantity: 5}
    { name: 'cherries', type: 'fruit', quantity: 5}
    { name: 'fish', type: 'meat', quantity: 5}
]
const groupByres = Object.groupBy(inventories, ({ type }) => type)

console.log('Object.groupBy type: ', groupByres)