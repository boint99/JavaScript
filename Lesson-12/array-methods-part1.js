/**
=> Array-method
- có rất nhiều Methods - phương thức khi sử lý dữ liệu trong Javascirt.
Đưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong lĩnh vực thưc tế
Thực hành về concat(), silce(), splice(), every(), findIndex(), toString(), join()
*/

/*
=> concat() dùng để nối hai hay nhiều mangr lại với nhau. Không làm thay đổi các mảng gốc mà trả về mảng mới chứa tất cả
các thành phần tử của mảng của mảng được nối.
*/
const ar1 = [1, 2, 3]
const ar2 = [4, 5, 6]
const arres =ar1.concat(ar2)
console.log('After conact(): ',arres ) // kq: [ 1, 2, 3, 4, 5, 6 ]
/*
=> Slice() trả về một mảng con cảu mảng ban đầu, từ vị trí startIndex đến endIndex (không bao gôm endindex).
Không làm thay đổi mảng gốc
*/
const array3 = [4, 5, 6, 7, 8, 9]
const arrayResult3 =array3.slice(1, 4)
console.log('After Slice(): ',arrayResult3 ) // kq:  [ 5, 6, 7 ]
/*
=> splice() dùng để thay đôi nộ dung của mảng bằng các xóa, thay thế nhưng phần tử mới. Sẽ làm thay đổi mảng gốc ban đầu
*/
const array4 = [4, 5, 6, 7, 8, 9] //  [ 6, 7, 8 ]
const spliceResult = array4.splice(2, 3, 10, 11, 12)
console.log('After splice(): ', spliceResult) // kq:  [ 6, 7, 8 ]
console.log('After array4: ', array4) // kq: [ 4, 5, 10, 11, 12, 9 ]
/*
=> every() kiểm tra xem tất cả các phần tử trong mảng có thảo mãn điều kiện của hàm callback hay không. Trả về true nếu
tất cả điều thảo mãn, ngược lại trả về false
*/
const array5 = [4, 5, 6, 7, 8, 9]
const allPositive = array5.every(num => num > 0)
console.log('Ater every(): ', allPositive) // KQ: TRUE

/*
=> findIndex() trả về chỉ số index của phần tử trong mảng có thỏa mãn điều kiện của hàm callback hay không. Trả về true
nếu tất cả điều thõa mãn, ngược lại trả về false
*/
const array6 = [4, 5, 6, 7, 8, 9]
const findIndexRes = array6.findIndex(num => num > 7)
console.log('Ater findIndex ', findIndexRes) // KQ:  4
/*
=> toString() Nối tất cả phần tử trong mảng thành một chuỗi String
*/
const array7 = [4, 5, 6, 7, 8, 9]
const toStringRes = array7.toString()
console.log('After toStringRes ', toStringRes) // KQ:  4,5,6,7,8,9
console.log('After toStringRes ', typeof toStringRes) //kq:  sTring()

/*
Join (): nối tất cả phần tử trong mảng thành chột chuỗi string (khác với toString ở điểm cuối chỉ định thêm
dấu phân cách)
*/
const array8 = [4, 5, 6, 7, 8, 9]
const joinRes = array7.join(', ')
console.log('After join(): ', joinRes)
console.log('After join(): ', typeof joinRes)
