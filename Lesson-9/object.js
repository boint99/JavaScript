/**
=> Trong javaScript, đối tượng (object) làm một cấu trúc dữ liệu linh hoạt và mạnh mẽ,
cho phép lưu trữ bà quản lý các dữ lệu phức tạp. Đối tượng bao gồm các cặp key-value
(khóa - giá trị). Mỗi khóa l một chuỗi( string)
và giá trị có thể là bất kỳ loại nào, bao gồm các đối tượng khác (nested object)
=> Có 2 cách tao object với cú pháp object literal và từ khóa chính new Object()
*/

// Cách khai báo 01: Cú pháp object Literal

let array1 = {
    username: "Test",
    age: 20,
    greate: function() {
        console.log(`Hi, OK`)
    },
    skills: ['test1', 'test2', 'test3', 'test4'],
    position: {
        fontEnd: ['test5', 'test6', 'test7', 'test8'],
        backEnd: ['test9', 'test10', 'test11', 'test12'],
        Check: true,
    }
}

let array2 = new Object()
array2.username = 'Test'
array2.age = 30
array2.greate = function (){
 console.log(`Hi, NOK`)
}
array2.position = {
        fontEnd: ['test5', 'test6', 'test7', 'test8'],
        backEnd: ['test9', 'test10', 'test11', 'test12'],
        Check: true,
    }
array2.skills = ['test1', 'test2', 'test3', 'test4']
// Cách khai báo 01: Cú pháp object new
console.log('Object literal: ', array1)
console.log('Object object new: ', array2)


// Làm việc với object()
// Thêm, sửa, xóa
array1.add = 'male' // thêm mới
array1.age = 30 // gi đè
array1.username = "user"
delete array1.greate

console.log('Object literal edited: ', array1)

