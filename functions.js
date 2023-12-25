// let arr = ["nil", "shiv", "taku", "papa", "mom"];

// let fil= arr.filter((el, i) => {
//     if (el!="nil" && el!="taku" ) {
//         return el;
//     }
// })

// console.log('fil:', fil)
// console.log("myans:", myans);

// let arr = ["1","2","3"];

// let ans= arr.map((el) => {
//   return +(el)*2;
// });
// // console.log("myans:", ans);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ans = num
//   .filter((el) => el % 2 != 0)
//   .map((el) => {
//     return el;
//   });

// console.log(ans);  output : [1, 3, 5, 7, 9];


function outer(){
    let b=10
    function inner(){
        let a = 20
        console.log(a+b)
    }
    inner()
}
outer()

//output 30