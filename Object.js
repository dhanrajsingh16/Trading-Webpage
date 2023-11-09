// let lecture = 10 ;
// let section = 3 ;
// let title = 'Javascript' ;

// const course = {

//     lecture: 10 ,
//     section: 3,
//     title: 'Javascript',
//     notes: {
//         introduction:"Welcome to 35 course"
//     },
//     enroll() {
//         console.log('you are sucessfully enrolled'); 
//     }
// }

// Factory Function

// function createCourse() {
//     return {

//     lecture: 10 ,
//     section: 3,
//     title: 'Javascript',
//     notes: {
//         introduction:"Welcome to 35 course"
//     },
//     enroll() {
//         console.log('you are sucessfully enrolled'); 
//     }
// }

// }

// const course = createCourse() ;

// course.enroll() 


// function createCourse(title) {
//    return {

//     title: title,
//     notes: {
//         introduction:"Welcome to 35 course"
//     },
//     enroll() {
//         console.log('you are sucessfully enrolled'); 
//     }
// }

// }

// const course = createCourse('JavaScript') ;

// course.enroll()
// console.log(course) 


//Constructor Function 

// function Course(title) {
//     this.title = title ,
//     this.enroll = function() {
//         console.log('you are successfully enrolled') ;
//     }
// }

// const course = new Course('Javascipt') ;


// delete course.title ;

// course.checkEnrollment = function() {
//     console.log('30 users are erolled') ;
// }

// course.enroll()

// console.log(course) ;



// function Course(title) {
//     this.title = title ,
//     this.enroll = function() {
//         console.log('you are successfully enrolled') ;
//     }
// }


// let number = 10 ;

// // pass by value

// let number_2 = number 

// console.log(number) ;
// console.log(number_2) ;



// //Priitive datatype
// let number = 10 ;

// //pass by value 
// let number_2 = number ;
// number = 15 ;

// console.log(number) ;
// console.log(number_2) ;

// //reference datatype
// let obj = {number : 10} ;
// //pass by reference 
// let obj2 = obj ;
// obj.number = 15 ; 

// console.log(obj);
// console.log(obj2) ;

// const course = {
//     title: 'Javascript',
//     enroll() {
//         console.log('you are successfully enrolled');
//     }
// }

// const course_1 = {...course}
// course_1.title = "C++" ;


// Object exercise 

// exercise using objects 
//itemname
//price
//discount
//itemode

const product = {
    itemName: 'Flower',
    price: 50, 
    discount: 20,
    itemcode:'F40'
}

function createProduct(name,price,discount,itemcode) {
    return{
        itemName: name,
        price: price,
        discount: discount ,
        itemcode: itemcode,
    }
}

const football = createProduct('football', 400, 10 , 'F30') ;


    function Product(name, price, discount, itemcode){
        this.itemName = name;
        this.price = price ;
        this.discount = discount ;
        this.itemcode = itemcode ;
        this.discountValue = function() {
        return price * discount / 100 ;
    }
}

const mobile = new Product('Oneplus Nord', 30000, 5, 'OP20')
        
    

