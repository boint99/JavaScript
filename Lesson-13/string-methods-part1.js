/*
- có khá nhiều methods - phương thức khi sử lý dữ liệu String trong javaScript.
- Dưới dây chúng ta sẽ tập trung vào những phương thức quan trọng v được dùng nhều
tròng thực tế (P1)
- Phương thức: charAt(), concat(), include(), indexOf(), slide(), split(), substring()
*/
/*
=> chartAt() trả về ký tự tại một vị trí cụ thể trong chuỗi. Vị trí bắt đầu từ 0. Trả về String rỗng nếu vị trí không tônf
tại.
*/

const str1 = 'Hello Word'
console.log('charAt: ', str1.charAt(0)) // H
console.log('charAt: ', str1.charAt(1)) // e
console.log('charAt: ', str1.charAt(7)) // o
console.log('charAt: ', str1.charAt(90)) // " "

// concat() Được sử dụng để nối 2 hoặc nhiều chuỗi lại với nhau và trả về một chuỗi mới
//không cần thay đổi gốc ban đầu
const str2 = 'Tiểu Bối'
const separator = ' - '
const str3 = 'Tập tành học code'
const concatResult = str2.concat(separator).concat(str3)
console.log('concat(): ', concatResult) // kq:  Tiểu Bối - Tập tành học code

// include(): kiểm tra xem chuỗi có chưa một chuỗi con cụ thể hay không, trả về true
//nếu chuỗi con được tìm thấy , ngược lại là false. có phân việt in hoa và in thường
const str4 = 'Tiêu Bối'
const include = str4.includes('boi') //kq:  false
console.log('include(): ',include )

// indexOf() Trả về index của phần tử xuât hiện lần đầu tiên của mỗi con trong chuỗi. Nếu chuỗi con không được
//tìm thấy, nó trả về -1. có phân biệt chữ hoa chữ thường
const str5 = 'Tiêu Bối'
const indexOfresult = str5.indexOf('boi')
console.log('affter indexOf(): ', indexOfresult) // -1

// split() Chia mỗi chuỗi thành một mảng các chuỗi dựa trên một ký tự nhân diện. Không làm thay đổi chuỗi gốc ban đầu.
const str6 = 'Tiêu, Bối, học, code'
const splitRes = str6.split(', ')
const splitRes1 = str6.split('học') //  [ 'Tiêu, Bối, ', ', code' ]
console.log('split(): ', splitRes) // kq: 'Tiêu, Bối, học, code'
console.log('split(): ', splitRes1)

// slice() trả về một chuỗi con từ một gốc ban đầu, từ vị trí startIndex đên endIndex (Không bao gồm endIndex). Không
//làm thay đổi chuỗi gốc ban đầu. Nếu chúng ta cố tình start > end thì slice sẽ trả  về chuỗi rỗng.
const str7 = 'javascript is fun '
const sliceRes1 = str7.slice(0, 10) // kq:
const sliceRes2 = str7.slice(10, 0) // kq:
console.log('sliceRes1: ', sliceRes1) // kq:  javascript
console.log('sliceRes2: ', sliceRes2) // kq: ""
/* subString() khá giống slice(): nó cũng trả về một chuỗi con tù một chuỗi gốc ban đầu, từ chỉ số startIndex đến endIndex)
(không bao gôm endIndex). Tuy nhiên khác với silce() ở 1 điểm: subString() sẽ hoán đổi startIndex và endIndex nếu chúng
ta vô tình để startIndex lớn hơn endIndex.
*/

const str8 = 'javascript is fun '
const subStringRes1 = str8.slice(0, 10) // kq:
const subStringRes2 = str8.slice(10, 0) // kq:
console.log('subString1: ', subStringRes1) // kq:  javascript
console.log('subString2: ', subStringRes2) // kq: javascript