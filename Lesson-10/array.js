/**
Trong javascript, 'Mảng' (array) là một kiểu dữ liệu dùng để lưu trữ dánh sách các giá trị.
Các giá trị trong mảng có thể là bất kì dữ liệu nào, number, string, object, thậm chí là các
mảng khác.
Mảng trong javascript có các chỉ số - index bất đầu từ 0, nghĩa là phần tử đầu tiên của mảng có index là 0,
*/
// Ví dụ cơ bản về cách tạo và su dụng mảng trong javaScript

// Tạo môt mảng Array chứ các số từ 1 -> 5
let number = [1,2,3,4,5]

// truy cập phần tử đài tiên
console.log('First: ', number[0])

// truy cập phần tử cuối cùng
console.log('Last: ', number[4])
console.log('Last1: ', number[number.length -1])

// Mảng có bất kỳ kiểu dữ liệu nào

let arrayMix = [1, 'text1', true, null, undefined]
console.log(arrayMix)
