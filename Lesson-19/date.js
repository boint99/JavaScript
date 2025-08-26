/*
- javaScript cung cấp cho chúng ta một đối tượng Build-in (tính hợp sẵn) là Date làm việc với ngày tháng và thời gian
- Đối tượng Date này có thể là thao tác rất nhiều với thời gian
Ví dụ: Tạo, định dạng ngày tháng, thực hiện các phép tính toán với thời gian
*/
// Phần 1: Có khá nhiều cách để khỏi tạo đôi tượng Date trong javaScript với thực sự khác nhau
// Cách 1: khỏi tạo date với ngày và thời gian tại thời gian hiện tại
const now = new Date()
console.log(typeof now)
console.log('Now: ', now)
console.log('Now: ', now.toLocaleString())

// Cách 2: Với chuỗi ngày tháng (ISO hoặc các định dạng khác)
const specifiDate = new Date('2025-08-17 12:12:00')
console.log('specifiDate', specifiDate.toLocaleString())

// Cách 3: với năm, tháng, ngày, giờ, phút, giây
// Lưu ý: tháng nó sẽ chạy từ 0 đến 11
const customDate = new Date(2025, 07, 17 , 12, 12, 0)
console.log('customDate', customDate.toLocaleString())

// cách 4: Dùng dấu thời gian (timestap): Số mili-giây kể từ ngày 1/1/1970 00:00:00 UTC
const nowTime = Date.now()
const timestapDate = new Date (nowTime)
console.log('nowTime: ', nowTime)
console.log('timestapDate: ', timestapDate)

// Phần 3: Cách lấy phần tử dữ liệu cụ thể tư một đối tượng Date
const currenDate = new Date()
console.log('năm: ', currenDate.getFullYear()) // năm
console.log('Tháng: ', currenDate.getMonth() + 1) // Tháng
console.log('Ngày: ', currenDate.getDate()) // Ngày

console.log('Giờ: ', currenDate.getHours())
console.log('Phút: ', currenDate.getMinutes())
console.log('Giây: ', currenDate.getSeconds())

console.log('Ngày trong tuần: ', currenDate.getDay())

// Phần 3: Cập nhật lại các thành phần của đối tượng
const setCurrenDate = new Date()
setCurrenDate.setFullYear('2026')
console.log('setCurrenDate', setCurrenDate.toLocaleString())

// Phần 4: Tính toan ngày tháng với Date
//Vd1: Tính khoảng cách giữa 2 ngày
const startDate = new Date('2025-08-17')
const endtDate = new Date('2025-09-17')
console.log(endtDate - startDate)
const diffDay = Math.ceil ((endtDate - startDate) / (1000 * 60 * 60 * 24))
console.log('diffDay', diffDay)

//Vd2: thêm hoặc bớt khoảng thời gian
const date = new Date() // lấy ngày hiện tại
date.setDate(date.getDate() + 5) //lấy 5 ngày
console.log('date', date.toLocaleString())

// Phần 5: Đinh dạng dữ liệu Object Date thành chuỗi String
const formatDate = new Date()
// c(): Chuỗi định dạng ISO (Định dạng theo ngày phổ biến khi làm việc với API backend
console.log('toISOString', formatDate.toISOString())
// toISOString(): Chuối định dạng UTC
console.log('toISOString', formatDate)
console.log('toISOString', formatDate.toISOString())

// toLocaleDateString() và toLocaleTimeString(): Định dạng riêng ngày tháng năm tháng hoặc thơi gian theo ngôn ngữ nguoif dùng
console.log('toLocaleTimeString', formatDate.toLocaleTimeString())
console.log('toLocaleDateString', formatDate.toLocaleDateString())

// toDateString() và toTimeString(): Trả về ngày hoặc thời gian theo định dạng người dung đọc ngắn
console.log('toDateString', formatDate.toDateString())
console.log('toTimeString', formatDate.toTimeString())