/*
Có khá nhiều method - phương thức khi xl với number
=> toFixed(), toPrecision(), toString(radix), isFinite(), number.isInterger(), number.isSafeInterger(), number.NaN, isNaN()
*/

/*
=> toFixed(): làm tròn một số theo số lượng chữ số thập phân được chỉ định trước. Kq trả về là sTring và sẽ làm tròn lên
như trong toán học.
*/
const num1 = 3.123456
const fixedNum = num1.toFixed(2)
console.log('toFixed(): ', fixedNum)

// => toPrecision(): Làm trong chữ số dựa trên theo chữ số chỉ định trước (bao gồm cả phần số nguyên và thập phân).
const num2 = 123.123456
const toPrecisionRes = num2.toPrecision(6)
console.log('fixedNum(): ', toPrecisionRes) // kq: 123.123

// toString chuyển đổi chuỗi thành chuỗi cơ số (radix) được chỉ định trước
const num3 = 255
const toStringRes = num3.toString(2)
console.log('toString(): ', toStringRes) // kq: 123.123

// => isFinte(): Kiểm tra xem giá chị có phải là chuỗi vô hạn hay không (true/false)
console.log('isFinite(123): ',isFinite(123) )
console.log('isFinite(Infinity): ',isFinite(Infinity) )
console.log('isFinite(-Infinity): ', isFinite(-Infinity))
console.log('isFinite("123"): ',isFinite('123'))

// =>  number.isInterger(): Kiểm tra số nguyên  (true/false)
console.log('Number.isInterger(123): ',Number.isInteger(123) )
console.log('Number.isInterger(Infinity): ',Number.isInteger(Infinity) )
console.log('Number.isInterger(-Infinity): ', Number.isInteger(-Infinity))
console.log('Number.isInterger("123"): ',Number.isInteger('123'))

// Number.NaN Đại điện cho một giá trị 'Not-a-number" trong javaScript, thường xuất hiện khi một phép toán số học
 không thể thực hiện được
console.log('Number.NaN: ', Number.NaN); // NaN
console.log('0 / 0: ', 0 / 0); // NaN (chia 0 cho 0 sẽ ra không xác định)
console.log('parseInt("abc123"): ', parseInt('abc123') // Chuỗi 'abc' không thể chuyển đổi thành số
console.log('parseFloat("abc123"): ', parseFloat('abc123')) // Không thể phân tích só từ chuỗi bắt đầu với ký tự không phải là sô
console.log('Number.NaN === NaN: ', Number.NaN === NaN) // NaN không xác định không sao sánh được
console.log('Number.NaN === NaN: ', NaN === NaN) // false
const Numbers = "123"
console.log('isNaN: ',isNaN('123'))
console.log(Number.isInteger(123))