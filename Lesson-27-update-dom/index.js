
/**
 Nội dung:
 - Thay đổi conten của html
 - Thao tác với thuộc tính (attributes0 của html, ví dụ src, href, width, heigh)
 - thay đổi css của phần tử
 - thêm sửa xóa các phần tử
 */
const updateDom = () => {
    const username = document.getElementById('username')
    const skillListAll = document.querySelectorAll('.skill')

    // Thay đổi content của html
    username.innerHTML = 'Tiểu Bối Học DEV...'
    skillListAll.forEach(e => e.innerHTML = 'Tiểu Bối nha')

    // Thay đổi thuộc tính src

    const profileImg = document.getElementById('image')
    profileImg.setAttribute('src', 'https://www.google.com/imgres?q=h%C3%ACnh%20%E1%BA%A3nh&imgurl=https%3A%2F%2Fimage.vnbackup.com%2Fr0iefClV5p1fOr0M93c25616b11b0db1%2Froi-tri-01.jpg&imgrefurl=https%3A%2F%2Flbm.vn%2Fnhung-hinh-anh-co-the-khien-nguoi-xem-phai-roi-tri%2F&docid=f4wdjAnYQKkqcM&tbnid=ioMefi1VWnTi3M&vet=12ahUKEwiwlr7RxZSPAxUgn68BHZ1qH8sQM3oECCUQAA..i&w=500&h=379&hcb=2&ved=2ahUKEwiwlr7RxZSPAxUgn68BHZ1qH8sQM3oECCUQAA')
    // lấy thược tính src
    console.log(profileImg.getAttribute('src'))

    // thay đổi thuộc tính href của thẻ a

    const blogTest = document.getElementById('tieuboiblog')
    blogTest.innerHTML = '  Tiểu Bối 2'
    blogTest.setAttribute('href', 'https://youtube.com')

    // xóa thuộc tính taget
    blogTest.removeAttribute('target')

    // # thay đổi css của phần tử
    // Thay đổi trực tiếp thong qua style
    username.style.color = 'red'
    username.style.fontSize = 20
    username.style.display = 'none'
    // 

    skillListAll.forEach(e => e.style.color = 'green')

    username.classList.add('test')
    username.classList.remove('test')
    username.classList.toggle('test')

    // 4. Thêm sữa xóa các phần tử
    // Tạo 1 cái div mới
    const newdiv = document.createElement('div')
    newdiv.innerHTML = 'new div javascirpt'

    // thêm phần tử div mới vào body

    document.body.appendChild(newdiv)
    document.getElementById('parent-div').appendChild(newdiv)

    // xóa 1 phần tử div từ phần tử cha

    document.body.removeChild(newdiv)

    username.remove()
}
