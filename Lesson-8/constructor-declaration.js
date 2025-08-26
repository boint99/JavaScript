// Constructor function (hàm khỏi tạo - tạo hàm): su dụng để tạo dối tượng mới. Thường
//được kết nối với từ khóa chính new

function developer (userName) {
    this.userName = userName
    this.great = function() {
        console.log(`Hi, I am ${this.userName} !`)
    };
}
const newArray1 = new developer('Boint1')
newArray1.great();

const newArray2 = new developer('Boint2')
newArray2.great();
