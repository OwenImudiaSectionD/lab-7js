///TASK ONE///

// let student = {
//     name: "Owen",
//     age: 19,
//     grade: 12,
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// }
// console.log(student.name);//Owen
// console.log(student.age);//19
// console.log(student.grade);//12
// console.log(student.greet());//Hello my name is Owen
// student.age= 22;
// console.log(student.age)//22

///TASK TWO///

// let bookString = '{"title":"Three Littles Pigs","author": "Owen Imudia", "year":2023, "genre": "Comedy"}';
// let bookObj = JSON.parse(bookString);
// console.log(bookObj);

// let bookString2 = JSON.stringify(bookObj);
// console.log(bookString2);

///TASK THREE///

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
// let person1 ={
//     firstName: "Owen",
//     lastName: "Imudia",
//     age: 20
// };
// let person2 = {...person1, age: 22};
// console.log(person1);
// console.log(person2);

///TASK FOUR///

// let calculator = {
//     add: function(a,b){
//         result= a + b
//         console.log(result)
//     },
//     subtract: function(a,b){
//         result= a-b
//         console.log(result)
//     },
//     multiply: function(a,b){
//         result= a * b
//         console.log(result)
//     },
//     divide: function(a,b){
//         result= a/b
//         console.log(result)
//     }
// }
// calculator.add(2,4)//output: 6
// calculator.subtract(9,4)//output: 5
// calculator.multiply(2,4)//output: 8
// calculator.divide(2,4)//output: 0.5