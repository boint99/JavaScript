/**
=> Array-method
- có rất nhiều Methods - phương thức khi sử lý dữ liệu trong Javascirt.
Đưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong lĩnh vực thưc tế
Thực hành về push(), pop(), shift(), unshifi(), forEach(), map(), filter(), find(), reduce(), some()
*/

let number = [1, 2, 3, 4, 5]
console.log('Length of number: ', number.length)

//push: thêm phần tử vào cuối cùng của mảng
number.push(6)
console.log('push', number) //kq: [ 1, 2, 3, 4, 5, 6 ]

//pop(): xóa phần tử trong mảng
number.pop(6)
console.log('pop', number)

//shift() : Loại bỏ phần tử đầu tiên của mảng
number.shift()
console.log('shift', number)

//unshift() : thêm bỏ phần tử đầu tiên của mảng
number.unshift(0)
console.log('unshift', number)

//forEach(): lặp qua từng phần từ của mảng
console.log('Start forEach: ')
number.forEach((item, index) => {
    console.log(`Index: ${index} - value: ${number}`)
})

// map() - Tạo tạo 1 mảng mới với các phần từ được biến đổi từ mảng gốc, ví vị bình phương từng phần tử
let SquareNumber = number.map((item) => {
    return item * item
})
console.log('Affter map() - number: ', number) // kq // [1, 2 ,3, 4, 5]
console.log('Affter map() -  SquareNumber', SquareNumber)

// filter () - Tạo một mảng mới với các phần tử thảo mãn điêu kiện, ví dụ lấy các chữ số chẵn
let evenNumber = number.filter((item) => {
    return number % 2 ===0
})

// find(): tìm phần tử đầu tiên thỏa mãn điều kiện
let foundNumber = number.find((number) => {
    return number > 3
})
console.log('Affter find() - FoundNumber: ', number)

// reduce(): Tính toán một giá trị duy nhất từ mảng - VD: tính tổng các số trong mảng
let sum = number.reduce((total, number) => {
     console.log('total: ', total)
     console.log('number: ', number)
    return total, number
})
console.log('Reduce - Sum: ', sum)