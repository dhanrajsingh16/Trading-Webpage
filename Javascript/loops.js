
// For loop
// for(i = 0; i<10; i++){
// console.log("Nmaeste World")
// }

// for(i = 5; i<51; i = i + 5){
//     console.log(i)
// }

// for(i = 50; i>4; i = i - 5){
//     console.log(i)
// }

// for(let i =0; i<10 ; i++){
//     if(i % 2 == 0)
//     console.log(i) 
// }

// same for while loop

//While loop
// let i = 0;
// while(i<10){
//     console.log("Namaste World")
//     i++

//Do while loop
// let j = 0;
// do{
//     console.log("Namaste World")
//     j++ ;
// }
// while(j<10)


//For...In
//Objects
let animal = {
    name : "Zebra",
    leg: 4 
};
console.log(animal.name) ;


let legprop = "leg"
//braket notation
console.log(animal[legprop]);

// for(let key in animal){
//     console.log(key, animal[key]); 
// }

// //Array
// let names = ["Dhanraj", "Neha", "Singh","Rishabh"] ;
// for(let index in names){
//     console.log(index, names[index])
// }

// //For...of
// for(let name of names){
//     console.log(name)
// }





//Arrays

// let selectBooks = ["The Rudest book ever", "Think and Grow rich", "Invisibe man"];
// console.log(selectBooks)
// console.log(selectBooks[1])
// console.log(selectBooks.length)



//Functions

function namesteWorld(name, lastname) {
    console.log(name +" " + lastname);
}

console.log(namesteWorld("Dhanraj", "Singh"))




function addition(a,b){
    console.log(a+b);
}

console.log(addition(5,5)) 


