// 1. words vs keyword 

// 2. var  let const 

// 3. hoisting

// 4. types in js :- 
  // primitive and reference

// 5. conditionals - if else / else if  

// 6. Loops - for / while 

// 7. Functions

// 8. Objects
 




//(*) variables and cosntants
 
//variables
// code me koi bhi data store karne ke liyee jiska data store karna hota hia ussee variable kaatee hai..
// eesaa kuch jisski value baadlee

//constant 
//jiski value nah baadlee

// var and let se bande hai variables 
//const ke bante hai constant



//(*) hoisting - variable and functions are hoisted which means there declaration is moved on the top of the code.

// var a ;  // declaration
// a = 12 ; // intialization
// console.log(a) ;




// (*) type in js:- 

//primitives - jinke values pe bracket nhi hota hai 
// var a = 12 ;

//reference = [] () {}
//aise koi bhi value jisko copy karne par real copy hota ,
//balki us main value ka reference pass hoojaata hai usee ,
//hum reference value kahtee hai, aur jiska copy karne par real ,
//copy ho jaaye wo value primitive type value hai

// var a = [12,13] ; -- 13 would pop up / delete
// var b = a ;

// b.pop() ;


//(*)  conditionals 
// - agar magar ke case mee ussse karte hai 
// - it is true aur false 



//(*)  Loops  
//loop ka matlab repeat 

//For loop

// to print (0 - 10)

// for(var i = 0; i< 11; i++) {
//     console.log(i) ;
// }

// to print for 25 - 50 
// for(i = 25; i<=50; i++){
//     console.log(i) ;
// }

// or

// for(i = 25; i<51; i++){
//     console.log(i) ;
// }


//While loops

// var a = 12 ;

// while(a<20){
//     a++ ;
//     console.log(a) ;
// }


// (*) Functions  = code ko naam dena

// (1) - jab aapka code aap turant nahi chalana chaate ho future mein chalaana chaahte ho 
// (2) - jab aapka code aap reuse karna chahte ho 
// (3) - jab aap code chalana chaatee ho har baar with different data

// Example 1 :- 

// function hellobolo() {
//     console.log("hello");
// }

// hellobolo() ;



//Example 2 :- 

// function oatsBanaoAndkhaa0(){
    
//     console.log("oats khaareedo");
//     console.log("pateela chadaoo gas par");
//     console.log("paani dalo aur gas on karo");
//     console.log("oats daalo");
//     console.log("mix it and boil");
//     console.log("eat");
    
// }

// oatsBanaoAndkhaa0() ; // how many time i repeat the functions or call it utna output times me show hooga

//arguments = real value jo hum dete hai functions chalate waqt 
//parameter = variables jinme value store hoti hai arguments waali 

// function abcd(a,b,c) {
//     console.log(a,b,c) ;
// }
// abcd(12,13,14) ;


//(*)arrays = hum ek variable mein ek value store kar paate hai par
// jab humein ek se jaaada value store karni ho tab fir usse use hota hai
// array ka , matlab ki array aapko freedom deta hai ek se jaayda value use karne ka

// array = groups of values 

// var arr = [11,12,31,435,56];

// arr[1] ;
// console.log(arr) - iss see pura array print hoo jaaeyga

// console.log(arr[1]) ; -- it is pointing / showing on 1st index that is 12 

//push pop shift unshift splice

// var arr = [11,12,31,435,56];
// arr.pop(); -- delete from the last element 
// arr.unshift(0) ; -- add to the 1st element
// arr.shift(0) ; -- delete from the 1st element 
// arr.splice(2,1) ; -- to remove element in btw (index value, kaha tak delete karna hai usske value )



//(*) - objects -- ek se jaada bande ki baat ji to hua array,
// ek bande ke baare mein saari baat ji tho hua subject
//objects hai ek bande ki details ko hold karna , in a key value pair
//ek bande ke information that is object


//1. blank obj 
//var  a = {} ;

// 2. filled obj 
// var demo = {   // age , name , email is property
//     age: 20,
//     name : 'Dhanraj',
//     email:'dhanrajsingh15122gmail.com',
//     //kuchbolo: functions(){} // --method because it include functions
// }

// demo.name ='Aakash'; -- we can also update the property
// //console.log(demo) ; 
