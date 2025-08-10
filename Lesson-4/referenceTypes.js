/** Kiểu dữ liệu tham chiếu - Refence Types */
/**
=> các giá trị tham chiếu không được lưu truaxw trực tiếp trong ngắn sếp (stack)
mà sẽ tham gia chiếu đên địa chỉ của đối tượng trong Heap Memory.
=> Các giá trị tham chiếu có thể thay đối sau khi chúng được tạo ra.
=> Các giá trị tham chiếu đối tượng A cho B, thì cả A và B sẽ tham chiếu đến cùng đối tượng
chứ không tạo ra bản sao đọc lập riêng biệt.
=> Refence Type bao gôm các kiểu dữ liệu phổ biến sau:
*/

// Object (đối tượng): Đại diện cho một tập hợp các thuộc tính và phương thức
let develeper = {
    userName: 'Tiểu Bối',
    age: 26,
    great: function() {
        console.log('Hi, I am ' + this.userName + '!')
        console.log(`Hi, i am ${this.userName}!`)
    }
}
develeper.great()
console.log("===============================")
// Array (mảng): Một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị.
let arrays = ['array1', 'array2', 'array3', 'array4', 'array5']
console.log('array', arrays)
console.log('array', arrays[0])
console.log('array', arrays[1])
console.log('array', arrays[2])
console.log('array', arrays[3])
console.log('array', arrays[4])
console.log("===============================")
// Function: Đại diện cho các hàm xử lý, cũng được coi là một loại đối tượng đặc biệt.

function Citys (city) {
    console.log(`Đây là ${city}`)
}

Citys('HCM')
console.log("===============================")