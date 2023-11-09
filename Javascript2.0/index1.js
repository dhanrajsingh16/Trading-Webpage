//var old js mein tha
//var function scoped hota hai => var apne parent functions main kahi bhi use ho saktaa hai 


//var -- puree func me usee ho sakta hai
//var add itself to the window


// function abcd(){ 
//    for (var i= 1; i<12; i++){ // it will every code to run in functions in var
//     console.log(i) ;
// }
// console.log(i) ; // the 12 is coming because of this code run
// }
// abcd() ;

//let -- only use in btw the braces
//let doesnot add itself to the window

// function abcd(){
//     for (let i= 1; i<12; i++){  // let will only use in braces so anser is 1 to 11
//      console.log(i) ;
//  }
//  console.log(i) ;
//  }
//  abcd() ;

//let const new js mein hai 
//let braces scoped hota hai 



//stack --  data store in like a box and it follows LIFO (last in first out)




//heap -- jitne bhi variables ya data hum baanate hai inhe store,
//kahi tho karna padta hai uske liye hota hai heap memory




//execution contest -- is a container here function code is executed ,
// and it's created whenever a function is called,
//it contains things,variable,functions and lexiacal environment

// function abcd() {
//     var a = 123 ;
//     function def() {
//         var b = 12 ;
//     }
// }

//lexical environment hota hai ek chart jisme ye likha hota hai ke ,
//aapka particular function ki cheejo ko access kar sakta hai and ,
//kinko nahi, matlab ki it holds it's scope and scope chain 

// //how to copy reference values 
// var a = [1,2,3,4,5] ;
// var b = [...a] ;
// a.pop() ; // a will be 1,2,3,4 and 5 deleted but not from b




//conditionals -- truthy & falsy 
//js mein kuch bhi likho wo mainly do prakaar mein se kissi ek prakaar ko belong Karti hai
//falsy values ye hai = 0 false undefined null NaN document.all
//truthy values baki sab hai falsy ko chood kar 

// if(0){
//     console.log("Hey");
// }
// else{
//     console.log("Hello"); 
// }





//Loops

//ForEach Loop --  foreach kabhi bhi by default aapke array mein change nahi karta wo,
//aapko changes karke deta hai array ki temporary copy par jiske wajah se,
//array hamesha same rehta hai

// var a = [1,2,3,4,5] ;

// a.forEach (function(val){ -- it will add 2 to every number present in array
//     console.log(val+2) ; 
// })

// a.forEach(function(val){ -- here array doesn't change the value 
//     val+2; 
// })






//ForIn Loop -- objects par loop karne ke liyee hota hai forin Loop

// var obj = {
//     name : "Dhanraj",
//     Reg: "21BCE0736",
//     Age: 20,
//     city:"Vellore",
// }

// for(var key in obj){
//     console.log(key, obj[key]); 
// }

//Do while Loop -- ek baar kuch karna hoo aur fir usske condition check karne ho 

// var a = 12 ; 
// do{
//     console.log("Hey") ;  -- hey will print 3 time because (12 < 15)
//     a++ ;
// }
// while(a < 15)


//Callback functions -- jab bhi koi code jo baad me chalta hai ,
//kyuki wo code baad mee chalta hai js ko ye pata nahi hota ke wo complete hua
//ya nahi, aise code ke completion par js ko batana jaata hai ke wo complete hoagaya,
//aur aap ussse chala sakte ho, ye baatane ka kaam callback ka hai


// aisa code jo baad me chaltaa hai use hum ek function dedete hai ke bhaiya jab complete,
//hojaana to ye function chalaa dena, aur wo function jo hum dete hai wo ek normal function hota hai aur ,
//usse khate hai callback function. 

// setTimeout(function() {
//     console.log("2 second baad chalana");
// }, 5000); // -- 5000 matlab 5sec 


// first class functions
//js me ek concept hai ki aap function ko usse kar sakte ho as a value 

// function abcd(a) {
//     a();
// }
// abcd(function(){console.log("Hello")}); 


//js me array me isseleye negative value likh saktee hai because wo array hai hee nhi wo object hai par baaki laguage me nhi


//how to delete object prop 


// var a = {
//     name : "Dhanraj",
//     age : 20
// } 
// delete a.age; --> to delete a element 
// delete a.name;