/*
- Những bài học liên tiếp với bất đồng bộ  trong javaScript:
=> Asynchronous => đã học
=> callback(callback hell) => đã học
=> promise (Promise Hell) => đã học
=> async/Await
=> event Loop
-----------
=> Async/Await:
- Async dùng để khai báo với với javaScript một hàm bất đồng bộ. Một Async function sẽ luôn trả về một Promise
- Await chỉ có thể  dùng được trong scope của các hàm async, giúp đợ cho đến khi Promise hoàn thành.
- Sử dụng async/Awaid đề giải quyết vấn đề bất đồng bộ
- Ví dụ thư tế là gọi APIs
- async/Await hell là gì? có giống callback hell hoặc Promise hell không?
=> Lưu ý: Async không thay  thế Promise
*/

// => 1. Async/Await - khai niệm - ví dụ đơn giản
const  testPromise = new Promise ((resolve, reject) => {
    let callApiSuccess = true
    setTimeout (() => {
        if (callApiSuccess) {
            resolve("API đã gọi thành công!")
        }
        else {
            reject ('Thất bại!')
        }
    }, 2000)
})

// xủ lý kết quả của promise trên bằng try, catch finnaly thay vì sử sụng then(), catch(), hay finnally()
//lưu ý try catch finnally phải được bọc trong một async functon thì mới dùng được await
// Khởi tạo hàm handleAsyncFunc
const handleAsyncFunc = async () => {
    try {
        const result = await testPromise
        console.log(result)
    }catch (error){
        console.log('Thất bại!!',error)
    } finally {
        console.log('Thành công Async/Await !!')
    }
}
handleAsyncFunc()
console.log('--------------------')

// => 2. Sử dụng async/Awaid đề giải quyết vấn đề bất đồng bộ
// B1: Khởi tạo biến lưu trữ dữ liệu sau khi đọc file xong
let fileData = null
console.log('B1: bắt đầu đọc file')

// B2: Khơi tạo hàm bắt đầu đọc file
console.log('B2: giả lập bắt đầu đọc file data')

// B3: khởi tạo hàm đọc file
const readFileData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log('B3: đọc file')
            fileData = 'Đọc file thành công và trả về KQ'
            resolve(fileData)
            reject('Lỗi ...')
        }, 3000)
    })
}
// Thực thi hàm readFileData
// cách sử dụng IFFE (Immediately Invoked Function ExPression
// => lưu ý khi dùng IFFE thì phải có dấu chấm phẩy ở đầu và kết thúc IFFE để tránh việc bị coi là tham số của 1 hàm khác
(async () => {
    try {
        const result = await readFileData()
        console.log('B4: Kết thúc quá trình đọc filedata đữ liệu nhân được',result)
    }catch (error){
        console.log('Kết thúc quá trình đọc lỗi filedata đữ liệu nhân được!!',error)
    } finally {
       console.log('Kết thúc quá trình đọc đữ liệu nhân!!')
    }
})()
console.log('--------------------')

// 3. Ví dụ thực tế
const getListPokemon = async (limit = 10) => {
    try {
        const respones = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {method: "GET"})
        const pokemon = await respones.json()
//        console.log('Danh sách pokemon',pokemon)
    }catch (error){
       console.log('có lỗi', error)
    } finally {
        if (pokemon) {
            console.log("Hoàng Thành")
        }
    }


}
getListPokemon(5)
console.log('--------------------')

// 4. async/Await hell là gì? có giống callback hell hoặc Promise hell không?

//try {
//    await test1()
//    await test2()
//    await test3()
//    await test4()
//    await test5()
//}catch (error){
//   console.log('có lỗi', error)
//} finally {
//   console.log("Hoàng Thành")
//}