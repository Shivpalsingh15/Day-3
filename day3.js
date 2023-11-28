//for loops
/*


// */
// for (let a = 5; a<=10; a++){
//     console.log(a)
//     console.log("coder");

//output
// //Jay Shri Krishna@LAPTOP-JH0FKQD2 MINGW64 /d/6 Lpa My work/Day 3
// $ node day3.js
// 5
// coder
// 6
// coder
// 7
// coder
// 8
// coder
// 9
// coder
// 10
// coder
// }

//Print odd numbers

// for (let odd=1; odd<=20; odd+=2){
//     console.log(odd)
// }
// output
// 1;
// 3;
// 5;
// 7;
// 9;
// 11;
// 13;
// 15;
// 17;
// 19;

// //print even numbers
// for (let even = 0; even <= 20; even += 2) {
//   console.log(even);
// }
// //output;
// 2;
// 4;
// 6;
// 8;
// 10;
// 12;
// 14;
// 16;
// 18;
// 20;

// for (let x=2; x<=4; x++){
//     for(let y=9; y<=11; y++){
//     console.log(x)
//     }
// }

// /output
// 2
// 2
// 2
// 3
// 3
// 3
// 4
// 4
// 4

// for (let x=2; x<=4; x++){
//     for(let y=9; y<=11; y++){
//     console.log(x, y)
//     }
// }

// output
// 2 9
// 2 10
// 2 11
// 3 9
// 3 10
// 3 11
// 4 9
// 4 10
// 4 11

// for (let x = 2; x <= 4; x++) {
//   for (let y = 9; y <= 11; y++) {
//     console.log("Name");
//   }
// }

// let arr=["mango", "pineapple", "banana", "litchi"]
// for(let i = 0; i<= arr.length-1; i++ ){
//     console.log(i, arr[i])
// }

// output

// 0 mango
// 1 pineapple
// 2 banana
// 3 litchi

// ----------------------------------------------------------------------
//for Of Loops

// for getting a string every Element
// for(car of "Mercedes"){
//     console.log(car)
// }
// output
// M;
// e;
// r;
// c;
// e;
// d;
// e;
// s;

// let fruit = ["mango", "apple", "banana"]
// for (fru of fruit) {
//     console.log(fru)
// }

// // output:
// // mango;
// // apple;
// // banana;

// // nested loops arrays

// // let weapons = ["sword", "shotgun", "machineries"]
// // for(weapon of weapons){
// //     console.log(weapon)

// // }

// // output

// // sword;
// // shotgun;
// // machineries;

// for(weapon of "weapons"){
//     console.log(weapon)}

//     output

//     w;
//     e;
//     a;
//     p;
//     o;
//     n;
//     s;

// function Title() {
//     return <h1>I am the Title!</h1>
// }
// <Title/>

// function arr(){
//     let fruit= [{
//         name: "nilesh",
//         age: 25,
//         place: "Hyderabad"
//     }]
//     return fruit.map((el) => el);
// }
// console.log(arr());

function normal(arr) {
  //   arr.map((el) => console.log(el));  map method
  // for(let i=0; i<arr.length; i++){  for loop style
  //     console.log(arr[i])
  // }

  // arr.forEach((el)=>console.log(el))  forEach method

  let output = arr.map((el, i) => {
    console.log(`${el} ${i}`);
    return `${el} ${i}`;
  }); // it return an array
  return output;
}

let myarr = ["nilesh", "shi", "taku"];
let ans = normal(myarr);
console.log("ans:", ans);
