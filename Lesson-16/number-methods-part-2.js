/*
=> Có khả năng nhiều methods - Phương thức khi xử lý dữ liệu Number trong javaScript.
=> Các phương thức: parsefloat(), parseInt(), Number.prototype().valueOf(), number.MAX_VALUE, Number.MIN_VALUE, Number.
POSITIVE_INFINTY, Number.NGEATIVE_INFINITY
*/

// => parsefloat(): Phân tích một chuỗi và trả về một phương thức (float). Nó sẽ đọc từ trái sang phải cho đến khi mặp một ký
//tự không phân tích thành số thì dừng lại
console.log('parseFloat1: ', parseFloat('3.12')) //3.12
console.log('parseFloat2: ', parseFloat('3.12abc')) //3.12
console.log('parseFloat3: ', parseFloat('abc123')) //NaN (Ko phải phân tích số từ chuỗi bắt đầu với ktys tự ko phải là số
// => parseInt(): Phân tích một chuỗi và trả về só nguyên. Nó sẽ được đọc từ trái sang phải cho đến khi hặp được một ký tự
//không thẻ phân tích thành số thì dừng lại. Ngoài ra có thể chỉ đinh (radix) để chuyển đổi tù 1 hệ cơ số sang số khác
console.log('parseInt: ', parseFloat('12')) //12
console.log('parseInt: ', parseFloat('122')) //122
console.log('parseInt: ', parseFloat('abc')) // Na
console.log('parseInt: ', parseFloat('a12')) // NaN

// => Number.prototypevalueOf(): Trả về giá trị gốc của đối tượng Number. thường dduojc sử dụng để trích xuất giá trị
//số từ đối tượng number. Hoặc biến 1 trường hợp nữa là lấy giá trị timstamp của đối tượng Date
const numObj = new Number(123)
console.log(numObj); // 123
console.log('typeof numObj: ', typeof numObj) // object
const value = numObj.valueOf()
console.log(value) // 123
console.log('typeof value: ', value) //number
console.log('new Date.valueOf(): ', new Date().valueOf()) // sẽ rả về timestamp tại thời điểm bạn chạy trương trình
console.log('new Date.valueOf(): ', new Date("2024-01-01").valueOf()) //1704067200000
// => number.MAX_VALUE(): là giá trị lớn nhất trong javaScript có thể đại diện. Giá trị này gần bằng 1.7976031348623157e+308
//Nếu một số lớn hơn giá trị này sẽ được coi là Infinity - vô cực
const max = Number.MAX_VALUE
console.log('number.MAX_VALUE: ', max + max) // 1.7976031348623157e+308
console.log('Number.MAX_VALUE: ', 2* max) // Infinty
console.log('Number.MAX_VALUE: ', max - 1 === max) // True (do sự chính xác của só quá lớn)
console.log('Number.MAX_VALUE: ', max - max === max) // false vi rõ ràng trù hết 0 rồi
// => Number.MIN_VALUE():

// => Number.POSITIVE_INFINTY(): Đại điện cho giá tri vô hạn (Infiity) trong javaScript.
const positiveINfinity = Number.POSITIVE_INFINTY
console.log('number.POSITIVE_INFINTY: ', positiveINfinity) // Infiity
console.log('number.POSITIVE_INFINTY: ', 1/0)
console.log('number.POSITIVE_INFINTY: ', positiveINfinity + 1)

// => Number.NGEATIVE_INFINITY():
const negativeInfinityINfinity = Number.NEGATIVE_INFINITY
console.log('number.NGEATIVE_INFINITY(): ',negativeInfinity) // -Infiity
console.log('number.NGEATIVE_INFINITY(): ', -1/0)
console.log('number.NGEATIVE_INFINITY(): ', negativeInfinity + 1)