// document.write('Hello World...!')
// var a=1 ; var b=5;   // =>if two statment used in one line SemiColone is most impportant
// console.log(typeof a , typeof b);

// const { response } = require("express");

// var i=5;
// for(i=0;i<10;i++){

// }
// document.getElementById("demo").innerHTML=i;        // Explaination 


// ############################### All about function ######################
// function myFuntion(a,b){
//     return console.log( a*b);
// }
// myFuntion(5,2);
//############################## another way to return something using function ##########################
// const x=myFunction(6,2);
// function myFunction(a,b){
//     return console.log(a*b);
// }

// ########### We can assign function as a variable and this func pass directly as a oputput ####################
// console.log("the value of temparature is" + toCelcious(77)+ "celcious");
//  function toCelcious(farenheight){
//       return (5/9)*(farenheight-32);
//  }

// ######################### Object ################################################
// const car={
//             name:"Volvo",
//             model:"X-series",
//             Mialage:200
// }
// console.log(car)          // ithe apan only car pass kel tr aplyala car chya properties bhetat apan pass kelelya
// console.log(car.name)     // jr aplyala car chya proprty access karayachya astil tr car.name as pass karayach
// console.log(car["name"])     // this is another way to access th property of object

// **************** Object Method ******************************
// const person={
//     name:"sandy",
//     age:23,
//     address:"Pune",
//     personAge:function(){
//         return  "The person" +" "+ this.name  +" "+ "is" +" "+ this.age +" "+ "years old";
//     },
    
// };
// console.log(person.personAge())


// ###################### Built in method###################################
// 1.)***** toUppercase()****
//   var message="Hello World...!";
//   var x=message.toUpperCase();
//   console.log(x)

// const person={
//         name:"sandy",
//         age:23,
//         address:"Pune"
// }
// const myArr=Object.values(person);
// console.log(myArr);





// 24/02/2021
// function second() {
//         console.log(this.a);
// }
// function first() {
//         this.a=30;
//         second();
        
// }
// first();

// console.log(a);


// 2)
// function second(){
//         console.log(this.name1);
// }
//  var person={
//         name1:'test',
//         sec:second
//  }
//  var name1="sandy"
//  window.name="training"
//  console.log(this.name1)

//  second.call(person)












// 08/03/021

// ########################### Fetch the data using fetch method###########################################
// =) There are 3 method to fetch the data 
//   I] using callback method
//   II] using fetch method
//   III] using wait and async

// i]
        // const dataURL= new XMLHttpRequest()
        // dataURL.open('GET','https://restcountries.eu/rest/v2/name/china');    // change only in here
        // dataURL.send()
        // dataURL.addEventListener('load',function(data){
        //         console.log(data.currentTarget.response);

        // })
      

// ii]
//         function getData(name){
//                 const data=fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//                 .then(response=>response.json())
//                 .then(data=>{
//                         console.log(data);


//                 })

     
//         .catch(err=> console.log(err.message))
// }
// getData(ind)