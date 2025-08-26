// Metthod Function (hàm phương thức): là hàm được định nghĩa/ khai báo bên trong đối tượng,
//được coi là một phương thức của đối tượng

let develeper = {
    userName: 'Tiểu Bối',
    age: 26,
    great: function() {
        console.log('Hi, I am ' + this.userName + '!')
        console.log(`Hi, i am ${this.userName}!`)
    },
    hello: () {
        console.log('Hi, I am ' + this.userName + '!')
        console.log(`Hi, i am ${this.userName}!`)
        //  arrow function không dùng được biểu thức this
    }
}
develeper.great()