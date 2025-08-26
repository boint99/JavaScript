/*
- Những bài học liên tiếp với bất đồng bộ  trong javaScript:
=> Asynchronous => đã học
=> callback(callback hell) => đã học
=> promise (Promise Hell)
=> async/Await
=> event Loop
-----------
- Promise():
+ Có 3 trạng thái: pending (chờ), Fulfilled (thành công), Rejected (Thất bại)
+ Xl có kết quả của promise bằng cách sử dụng .then(), catch() và .finally().
+ giải quyết vấn đề bất đồng bộ
-  Promise Hell: khá tương tự như callback
*/

// => 1. Promise(): là một đối tượng trong javaScript Đại diện cho một tác vụ bất đồng bộ  cần thời gian chờ HT
let testPromise = new Promise ((result, reject) => {
    let callApiSuccess = true
    setTimeout(() => {
        if (callApiSuccess) {
            result('Đã gọi API thành công')
        } else {
        reject('Đã gọi API không thành công')
        }
    }, 2000)
})
console.log(testPromise)

testPromise
    .then( result => {
         console.log(result)
    })
    .catch(error => {
          console.log(error)
    })
    .finally(() => {
        console.log("Hoàn tất quá trình Promise")
    })

console.log('--------------------')
// 2. giải quyết vấn đề bất đồng bộ
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
readFileData()
    .then(fileData => {
        console.log('- Đọc dữ liệu thành công: ', fileData)
    })
    .catch(error => {
         console.log('- Đọc dữ liệu ko  thành công: ')
    })
    .finally(
          console.log('B4: Kết thúc quá trình')
    )

console.log('--------------------')

// 3. Gọi Api thực tế giải

const getListPokemon = (limit = 10) => {
    return fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {method: "GET"})
        .then(rawRes => {
            rawRes.json()
                .then(pokemon => {
                    console.log("Danh sách pokemon: ", pokemon)
                })
        })
        .catch(error =>  {
            console.log('có lỗi', error)
        })
        .finally(() => {
            console.log("Hoàng Thành")
        })
}
getListPokemon(5)

console.log('--------------------')
// => Vấn đề Promose Hell khá tương tự với call back hell
// Khi tác vụ sau phải dựa vào kết quả của tác vụ trước nên phải lòng then như này => promise hell
getListPokemon(5)
    .then(prokemon => {
        console.log('prokemon: ', pokemon)
        getListPokemon_01()
            .then (() => {
                getListPokemon_02()
                .then (() => {
                    getListPokemon_03()
                    .then (() => {
                        /////
                    })
                })
            })
    })