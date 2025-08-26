/*
- có khá nhiều methods - phương thức khi sử lý dữ liệu String trong javaScript.
- Dưới dây chúng ta sẽ tập trung vào những phương thức quan trọng v được dùng nhều
tròng thực tế (P1)
=> - Phương thức: tolowerCase(), toUpper(), trim(), replace(), mamth(regex), search(regex), startsWith(), endsWith()
*/
/*
=> cc: Chuyển đổi tất cả cá ký tự trong chuỗi thành chữ hoa
*/
const str1 = 'Tiểu Bối'
const lowrStr = str1.toLowerCase()
console.log('toUpper(): ',lowrStr)
/*
=> toUpper(): Chuyển đổi tất cả các ký tự trong chuỗi thành chữ hoa
*/
const str2 = 'Tiểu Bối'
const upperStr = str1.toUpperCase()
console.log('toUpper(): ',upperStr)
// trim(): Loại bỏ khoảng trắng (space) ở đầu và cuối chuỗi, không thay đổi chuỗi ban đầu
const str3 = '           Tiểu Bối'
const strimStr = str3.trim()
console.log('trim(): ',strimStr)
/*
=> replace() Thay thế một chuỗi con trong chuỗi thành một chuỗi khác.Nó chỉ thay thế lần xuất hiện đầu tiên
muốn thay thế toàn bộ bằng biểu thức chính quy (regex) với flag (gobal). Không làm thay đổi chuỗi gốc ban đầu
*/
const str4 = 'Hello  Word Word  Word  Word'
const replaceStr = str4.replace('Word', 'Tiểu Bối')
const replaceStrAll = str4.replace(/Word/g, 'Tiểu Bối')
console.log("replace(): ", replaceStr)
console.log("replaceStrAll(): ", replaceStrAll)
/*
=> math(): tìm kiếm và trả về một mảng chứa kết quả khớp với biểu thức chính quy (regex) trong chuỗi,
nếu không có khớp với kết quả sẽ trả về là null. Chỉ trả về kết quả của lần xuất hiện đầu tiên. Muốn trả về kết quả
thù dung flag g (global).
*/
const str5 = 'Tiểu Boisdev developer dev dev dev'
const matches = str5.match(/dev/g)
console.log('match(): ', matches)
/*
=> search() Tìm kiếm và trả về một mảng kết quả biểu thức chính quy (regex) trong chuỗi.
và trả về index tại vị trí lần đầu tiên xuất hiện của chuỗi trong regex. Nếu không timm thấy, sẽ trả về -1
*/
const str6 = 'Tiểu Boisdev developer dev dev dev'
const foudIndex = str6.search(/dev/g)
console.log('affter Search(): ', foudIndex)
// => startsWith() Kiểm tra xem chuỗi có bắt đầu một chuỗi con cụ thể hay không. trả về true/false
const str7 = 'hello Tiểu Bối'
const startsWithResult = str7.startsWith('hello')
console.log('startsWith(): ', startsWithResult)

// => endswith(): Kiểm trả xem chuỗi có kết thúc bằng một chuỗi con cụ thể hay không. trả về true/false.
const str8 = 'hello Tiểu Bối'
const endsWithResult = str8.startsWith('hello')
console.log('startsWith(): ', endsWithResult)