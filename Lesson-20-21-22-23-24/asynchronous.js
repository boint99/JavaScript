/*
- Những bài học liên tiếp với bất đồng bộ  trong javaScript:
=> Asynchronous
=> callback(callback hell)
=> promise (Promise Hell)
=> async/Await
=> event Loop
- Khái niệm về bất đồng bộ trong javaScript
*/

// Bài toán đồng bộ: Synchronous
console.log('run 1 ')
console.log('run 2 then run 1 ')
console.log('run 3 then run 1 and run 2 ')
// Bài toán bất đồng bộ: Asynchronous: đọc fle dữ liệu và hiên thị dữ liệu của file ngoài. trong thực tế sẽ cân phải tốn
//thời gian để hoàn thành tùy theo nội dung file

// B1: Khởi tạo biến lưu trữ dữ liệu sau khi đọc file xong
let fileData = null
console.log('B1: bắt đầu đọc file')

// B2: Khơi tạo hàm bắt đầu đọc file
console.log('B2: giả lập bắt đầu đọc file data')
// B3: khởi tạo hàm đọc file
const readfileData = () => {
    setTimeout (() => {
        console.log('B3: đọc file')
        fileData = 'Đọc file thành công và trả về KQ'
    }, 3000)
}
// Thực thi hàm readFiledata
readfileData()

// B4: Kết thúc
console.log('B4: kết thúc quá trình')
console.log('--------------------')

// => 2. Sử dung