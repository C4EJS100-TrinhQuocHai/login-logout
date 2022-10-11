/* 
Các loại function 
Có 3 loại 
1. Declaration function  
2. Expression function   
3.  Arrow function  
 */
// 1 declaration funtion 
// khai báo :
//  function nameStudents() {
//     function hello(){
//       console.log("chào mọi người!");
//     }
//     hello();
//  }
// console.log(nameStudents());
// hoisting
// quy tắc đặt tên hàm thì đặt theo kiểu camel case (giống như quy tắc đặt tên biến!)
// thựcc thi hàm  gọi hàm
//2. Expression function
// cách khai báo
// let result =function tinhTong() {
//     console.log("hello!");
// }
// result();
// gọi hàm để thực thi!
// 3 Arrow function
// cách khai báo 
// let result =()=>{
//   console.log("chào mọi người ra!");
// }
// result();
// hàm được thực thi khi được gọi hàm!
//  gọi hàm 
// tham số và đối số trong hàm
// function tinhTong(number) {
//   let sum=0;
//   //console.log(arguments);
//   for (const key in arguments) {
//     console.log(arguments[key]);
//     sum += arguments[key];
//   }
//   console.log(sum);
// }
// tinhTong(5,6,8,9,19);
// arguments
// kết quả trả về của 1 hàm 
// return kết quả trả về của hàm 
// let result= function tinhTong(params) {
//     return  5;
//     // không được phép ghi các mã lệnh đằng sau câu lệnh return
// }
// console.log(result());
// function tinhTong() {
//     for (let i = 0; i < 5; i++) {
//         if(i==2){
//           console.log(i);
//           break;
//         }else if(i<4){
//           console.log(i);
//           return
//         }
//         return;
//     }
// }
// tinhTong();
// function nameTruongNgu() {
//   let ngu=prompt("Moi ban nhap vao mot ten bat ki");
//   console.log(ngu);
// }
// nameTruongNgu();
// function maxAndSumValue() {
//   let max = arguments[0]
//   console.log("max",max);
//   let sum = 0;
//   for (const key in arguments) {
//     if (Number(arguments[key]) > max) {
//       max = arguments[key]
//     }
//     sum = sum + Number(arguments[key])
//     //sum=0+ Number(["1","2","3"])
//     console.log("11111",0+["1","2"]);
//   }
//   console.log(`so lon nhat la ${max}`);
//   console.log(`tong la ${sum}`);
// }
// let arr = prompt('xin moi nhap day so cach nhau boi dau phay').split(',')
// maxAndSumValue(arr)
// function a(b) { // x là tham số nhận vào là 1
//   b++; 
//   //3
//   return function () {
//     console.log(++b); //3 
//   };
// }
// // a(1)(); // truyền 1 đối số có giá trị là 1 // 3 
// // a(1)(); //3 
// // a(1)(); //3
// let x=a(2);
// x();//3
// console.log(".........",a);
// x();//4
// x();//5
// viết function kiểm tra số nguyên tố !
/* function kiemTraSnt(a) {
  let flag = true;
  if (a < 2) {
    flag = false;
  } else {
    for (let i = 2; i < a; i++) {
      if (a % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag == true) {
    return true
  } else {
    return false
  }
}
// không truyền 16 nữa mà mình truyền 1
let n = +prompt('xin moi nhap so luong so nguyen to ban muon in ra')
let i = 0
let arrN = []
let x = 0;
while (i < n) {
  if (kiemTraSnt(x) == true) {
    arrN.push(x)
    i++
  }
  x++
}
console.log(arrN); */
// function inner(flag) {
//   console.log(flag);
//   hello = 10;
//   if (flag==true) {
//     return ++hello;
//   }
//   return --hello;
// }
// var hello = 12;
// inner(hello > 11 ? false : true);// inner(false)
// // toán tử 3 ngôi! nếu đÚng thì trả về flase sai thì true
// console.log(hello);
// function swap(a, b) { // a=8 b =9
//   var temp = a; // phạm vi của var là function 
//   a = b;
//   b = temp;
// }
// var a = 8; var b = 9; 
// swap(a, b);
//  console.log("a",a ,"b",b)
/*  */
// fetch('https://randomuser.me/api/?results=10')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.results)
//    let result=data.results;
//    for (let i = 0; i < result.length; i++) {
//    console.log(result[i].name.title);
//    }
//   }
//)

// function checkPassword() {
//   let pass = document.getElementById("password").value;
//   let p = document.getElementById("error");
//   console.log(pass);
//   if (pass.trim().length < 6 || pass.indexOf(" ") != -1) {
//     p.setAttribute("style","display:block;color:blue");
//     document.getElementById("password").value = "";
//   } else {
//     p.setAttribute("style", "display:none");
//     let pConfirm = document.getElementById("confirmError");
//     let passConfirm = document.getElementById("confirmPassword").value;
//     if (passConfirm !== pass) {
//       pConfirm.setAttribute("style", "display:block;color:blue");
//       document.getElementById("confirmPassword").value = "";
//     } else {
//       pConfirm.setAttribute("style", "display:none");
//       document.getElementById("confirmPassword").value = "";
//     }
//     document.getElementById("password").value = "";
//   }
// }










