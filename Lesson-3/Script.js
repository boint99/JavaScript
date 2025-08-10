console.log('Lesson 3')
/*
- Cách sử dụng let, var, const
=> Biến var
+ Hoisting: biến khai báo var sẽ được hoisted (di chuyển lê đầu phạm vi khối (scope) của nó và đồng
thời biến nó được khỏi tạo giá trị mạc định của ban đầu là underfined. Cho nên chúng ta có thể sử dụng
biến trước khi khai báo mà không không gặp lỗi.
Vd:
console.log('nameVar', nameVar) => biến var khai báo sau
var = nameVar('Tiểu Bối Dev)
- Var có thể tái khai báo biến: có thể tái khai báo cùng một biến var nhiều lần trong phạm vi mà không
gặp lỗi
Vd:
    nameVar = nameVar('Tiểu Bối - học dev)
    console.log('nameVar', nameVar)
- var có thể gán lại: có thể gán lại giá trị của biến var
VD      nameVar = nameVar('Tiểu Bối - học dev - làm web)
        console.log('nameVar', nameVar)

=> Cách sử dụng let
- Cũng có hoisting: Biến khai báo bằng let  cùng được hoisted (di chuyển lên đầu phạm vi khối (scope)
của nó), nhưng lại không được khỏi tạo giá trị mặc định bạn đầu nào cả. Nên không thể sử dụng biến khi
khi khai báo.
+ khai báo
  nameConst = 'Tiểu Bối'
  consle.log('nameConst', nameConst)
+ gán lại
  nameConst = 'Tiểu Bối - DEV'
  consle.log('nameConst', nameConst)
+ Tái sử dụng: không tái sử dụng được

=> Cách sử dụng const:
- Cũng có hoisting: Biến khai báo bằng const cũng được hositing (di chuyển lên đầu phạm vi khối (scope)
của nó, nhưng lại không được khỏi tạo lại giá trị mạc định ban đầu nào cả. Nên không thể tái sử dụng trức khi
khai báo
console.log('nameVar', nameConst)
+ Khai báo biến:
nameConst = 'Tiểu Bối'
console.log('nameVar', nameConst)

+ Tái khai báo: Không thể tái khai báo cùng một biến nhiều lần với const
+ gán lại: không thể gán lại giá trị của biến const

=> block-scope
- scope được xác định bới đâu {}
vd; const testScope = () => {
}
*/