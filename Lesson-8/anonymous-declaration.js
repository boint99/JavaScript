// Anonymous Funcition: Hàm ẩn danh: là thường được sử dụng cho các hàm khác, ví dụ trong các
//hàm xử lý sự kiện hoặc các hàm gọi lại (callback )

setTimeout(function() {
    console.log('test')
}, 1000)

setTimeout(() => {
    console.log('test2')
}, 1000)