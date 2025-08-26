/*
- Những bài học liên tiếp với bất đồng bộ  trong javaScript:
=> Asynchronous => đã học
=> callback(callback hell)
=> promise (Promise Hell)
=> async/Await
=> event Loop
- Khái niệm về bất đồng bộ trong javaScript
*/

/*
=> callback(callback hell)
- callback là một hàm được truyền vào dưới dạng tham số và một hàm khác và được gọi sai khi hàm kia thực hiện xong
- dùng để giải quyết bất đồng bộ
- có vd thực tế 1 cách để giải quyết bất đồng bộ 1 các trực quan là Gọi APIs
- callback hell nghĩa là khi các hàm callback lòng nhau quá nhiều, đẫn đến việc maintain bảo trì code về sau rất khó khăn
*/

// 1. callback là một hàm được truyền vào dưới dạng tham số và một hàm khác và được gọi sai khi hàm kia thực hiện xong
// B1: Khởi tạo biến lưu trữ dữ liệu sau khi đọc file xong
let fileData = null
console.log('B1: bắt đầu đọc file')

// B2: Khơi tạo hàm bắt đầu đọc file
console.log('B2: giả lập bắt đầu đọc file data')
// B3: khởi tạo hàm đọc file
const readfileData = (callback) => {
    setTimeout (() => {
        console.log('B3: đọc file')
        fileData = 'Đọc file thành công và trả về KQ'
        callback(fileData)
    }, 3000)
}
// Thực thi hàm readFiledata
readfileData(() => {
    // B4: Kết thúc
    console.log('B4: kết thúc quá trình', fileData)
})

// 3. Có vd thực tế 1 cách để giải quyết bất đồng bộ 1 các trực quan là Gọi APIs
const getListPokemons = (apiEndPoint, callback) => {
    const requesAPI = new XMLHttpResquest()
    requesAPI.open("GET", apiEndPoint)
    requesAPI.onload = () => {
        if (requesAPI.status >= 200 && requesAPI.status <= 299) {
            const responData = JSON.parse(requesAPI.responseText)
            callback(responData)
        }
    }
    requesAPI.send()
}

getListPokemons('https://pokeapi.co/api/v2/pokemon?limit=10', (requesAPI) => {
    document.getElementById('list-pokemon').innerHTML = responData.results.map(pokemon => `<li>${pokemon.name}</li>`).join('')
})

// 4. callback hell nghĩa là khi các hàm callback lòng nhau quá nhiều, đẫn đến việc maintain bảo trì code về sau rất khó khăn