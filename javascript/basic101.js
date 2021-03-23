// fco-gzaq-zde
// variable rules and declaration..
// var x=5;
// console.log(typeof x);

// var y="sandy";
// console.log(typeof y);

// var z=true;
// console.log(typeof z);

//  console.log(typeof a);

// var _4="sandy";
// console.log(_4);

// var $101=989;
// console.log($101);
// console.log(typeof $101);

// console.log(y+ " " +z);
 
// operator rules and declaration..
// var l=12;
// var m=4
// var n=6;
// var p=2;
// var r=12*2/(6-4);
// console.log(r);
// alert(r);
// r++;
// var r=r+2;
// r += 3;
// console.log(r);

//   var per=prompt("plz enter your 10th %");
//     alert(per);



// **all about DOM b using id**

// console.log(document.getElementById("fpara").innerHTML);
//  console.log(document.getElementById("fpara").outerHTML );
// console.log(document.getElementById('demo').innerHTML=5+6);

// ** about opacity**
// document.getElementById("fpara").style.opacity="0"  ;
// document.getElementById("fpara").style.opacity="none" ;

// ** about document**
//  var p=document.querySelectorAll(".paras");
//  alert(p[1].innerHTML);


// ** sort function **
// var arr=[70,78,40,2,60,15] 
// var a=arr.sort();
// alert(a.toString());
// this method output by using askey

// var arr=[70,78,40,2,60,15];
// var a=arr.sort(function(a,b) {return a-b});
// alert(a);

// ** function **
// var person= {
//     name: "sandy",
//     age: 23,
//     address:"pune"
// }
// console.log(person);



//another way to declare function and pass value by using this keyword

// var Student=function(name,age,address)
// {
//     this.name=name;
//     this.age=age;
//     this.address=address;
// }

// var Student1= new Student("sandy",23,"pune");
// var Student2= new Student("akash",22,"mumbai");
// var Student3 =new Student("deepa",24,"Nashik");
// console.log(Student1);
// console.log(Student2);
// console.log(Student3);


// using this we can use function 
// var Student=function(name,year,address)
//  {
//     this.name=name;
//     this.dob=year;
//     this.address=address;
//     this.Age=function() {return 2021-this.dob } //this keyword use karun 1 age ghetal n tyalach function assign karun return value keli..closure property bolato
// }
// var abc= new Student("sandy",1990,"pune"); //abc 1 variable create karun tyalach apan Student variable throuth value assign kelyat..
// var pqr= new Student("manoj",1998,"nashik");
// var lmn= new Student("kukya",1996,"mumbai");
// console.log("the current age of Student abc is"+ " " +abc.Age()); //ithe apan age madhe aleli value print kartoy
// console.log("the current age of Student pqr is"+ " " +pqr.Age());
// console.log("the current age of Student lmn is"+ " " +lmn.Age());


 //** Prototype use**/
// var Person=function(name,year,address)
//  {
//     this.name=name;
//     this.dob=year;
//     this.address=address;
//  }

// Person.prototype.getAge=function()
// {
//     return 2021-this.dob;
// }
// Person.prototype.language='english';
// var a= new Person('a', 2000,'Pune');
// var b= new Person('b',1998,'mumbai');
// var c=new Person('c',2000,'pune');
// a.college="abc";
// a.subject=['math','english','javascript']
// a.calculateMarks=function()
// {
//     return 30;
// }
// console.log(a.calculateMarks())

// **closure function**
// function getDriverLicenceAge(minAge)
// {
//     return function(year){         //   this is the closure property i.e., return madhe funct pass karato
//       age=2021-year;
//       if(age>=minAge){
//          return("the person is allowed to vote as he is " + age + "year old");
//       }
//       else
//       {
//          return("the person is not allowed to vote as he is " + age + "year old");
//       }
//    }
// }
// var test= getDriverLicenceAge(21);
// console.log( getDriverLicenceAge(21)(1995));



// function second(){
//    console.log(this.a);
// }
// function first(){
//    a=30;
//    second();
// }
// console.log(first());

// function second(){
//       console.log(this.a); //this cha scope apan kasa cll karato tyavr depende asat
//    }
//    function first(){
//       var a=20;
//       second();
//    }
//     var sec=first(); //  time:16.42:24-02-2021

// var Person={
//    name:'sandy',

// }

// ** scope practice **

// function foo(a) {
        
// 	console.log(a);
// }
// foo(2);

// 2).
// function foo(a) {
       
// 	console.log(a+b);
// }
// var b=2;
// foo(2);

// 3).nested scope loop in also lexical scope 

// function foo(a) {
// 	var b = a * 2;

// 	function bar(c) {
                
// 		console.log( a, b, c );    // lexical scope within console.log ....1st it find a,b,c in this scope i.e.,in bar(..)funt if no search then search outer scope or block
//         // a=2,b=2*2=4, c=4*3=12
// 	}
// 	bar(b * 3);

// }
// foo(2);


// 4). **  another lexical scope ex **
// function foo(str, a) {
// 	eval( str );       // cheating
// 	console.log( a, b );  // 1st-ithe console la a and b bhetala nahi so to outer scope check krnr ie., foo() tithe tyala nhi bhetala so to prt outer scope check krnr mg tyala global scope la b=2 bhetali 
//     // then to foo(..)madhe pass keleli value ie a ghenar n str la pn value denar b=3.. then console.log chya time to ky krnr global chi value n gheta to scope chi ie. "lexical scope" chi value ghenar ie. a=3 
// }

// var b = 2;       // global scope

// foo( "var b = 3;", 1 );

// // o/p=> 1 3

// 5).

// function foo(str) {
//         "use strict"; // jr strict mode madhe program asl tr to aplyala refrenceError denar
//     eval( str );
//     console.log( a ); // ReferenceError: a is not defined
//  }
//  foo( "var a = 2");

// ** function scope**
// 1).
        // function foo(a) {
        //     var b = 2;

        //     // some code

        //     function bar() {
        //         // ...
        //     }

        //     // more code

        //     var c = 3;
        // }
// yat a,b n bar(this is block of funt ) cha scope funct scope ahe 

// 2).
// function doSomething(a) {
// 	b = a + doSomethingElse( a * 2 );

// 	console.log( b * 3 );
// }

// function doSomethingElse(a) {
// 	return a - 1;
// }

// var b;

// doSomething( 2 );





// IIFE
// UI form input
// let UIModule=(function(){
//         let htmlIds={
//                 para:'paras',
//                 div:'index'
//         }
//         let paraVal=document.getElementById(htmlIds.para).innerHTML;
//         function ModifyPara(val){
//                 document.getElementById(htmlIds.para).innerText=document.getElementById(htmlIds.para).innerText +val;
//         }
//         let hideAnyElemet=function(id)
//         {
//                 document.getElementById(id).style.display='none';
//         }
//         return{
//                 getIDs:function()
//                 {
//                         return htmlIds;
//                 },
//                 getParaValue:function()
//                 {
//                         return paraVal;
//                 },
//                 setParaValue:function(val)
//                 {
//                         ModifyPara(val);
//                         if( val<20 )
//                         {
//                                 hideAnyElemet(htmlIds.div)
//                         }
//                 },
//                 hideDiv:function(id){
//                         hideAnyElemet(id);
//                 }
//         }
// })()

// // // appModule
// let appModule=function(uMod){
//         this.counter=40;
//         function calculation(t){
//                 if(t){
//                         counter=counter-t;
//                 }
//                 else{
//                         counter=counter+50;
//                 }
//                 if(counter<20){
//                         // uMod.hideDiv(uMod.getIDs().div)
//                 }
//         }
//         return{
//                 getLastCounter:function(){
//                         calculation();
//                         return counter;
//                 },
//                 serCounter:function(val){
//                         calculation(val)
//                         uMod.setParaValue(counter);
//                         return counter;
//                 },
//         }
// }(UIModule)
// // console.log(UIModule.getParaValue());
// console.log(appModule.getLastCounter(11))


// let UIModule=(function(){
//         let htmlIds={
//                 demo:'method',
//                 button='btn'
//         }
//         let demoDoc=document.getElementById(htmlIds.demo).innerHTML;
        
//                 document.getElementById(htmlIds.demo).innerText=document.getElementById(htmlIds.demo).innerText;
        
//          let elemet=function(id)
//         {
//                  document.getElementById(id).style.display='none';
//          }
//         return{
//                 getIDs:function()
//                 {
//                         return htmlIds;
//                 }
//         }
// })()

// let appModule=function(uMod){
//         this.counter=40;
//         function calculation(t){
//                 if(t){
//                         counter=counter-t;
//                 }
//                 else{
//                         counter=counter+50;
//                 }
//                 if(counter<20){
//                         // uMod.hideDiv(uMod.getIDs().div)
//                 }
//         }
//         return{
//                 getLastCounter:function(){
//                         calculation();
//                         return counter;
//                 },
//                 serCounter:function(val){
//                         calculation(val)
//                         uMod.setParaValue(counter);
//                         return counter;
//                 },
//         }
// }(UIModule)
// // console.log(UIModule.getParaValue());
// console.log(appModule.getLastCounter(11))





//** ES5 example/syntax**
// const Person=function(name,address,year){
//                 this.name=name;
//                 this.address=address;
//                 this.year=year;
//                 // this.calAge=function()
//                 // {
//                 //         return(2021-this.year)
//                 // }  // make a copy of calAge function in all object
//         }
//         Person.prototype.calAge=function()
//         {
//                 return 2021-this.year;        // in this by using protype access this calAge method for all object without repeating copy 
//         }
//         const a=new Person('abc','Pune',1998);
//         const b=new Person('pqr','Mumbai',1999);
//         console.log(a);
//         console.log(b);


// 2) example
// const Person=function(name,address,year){
//         this.name=name;
//         this.address=address;
//         this.year=year;
//         // this.calAge=function()
//         // {
//         //         return(2021-this.year)
//         // }  // make a copy of calAge function in all object
// }
// Person.prototype.calAge=function()
// {
//         return 2021-this.year;        // in this by using protype access this calAge method for all object without repeating copy 
// }
// const a=new Person('abc','Pune',1998);
// const b=new Person('pqr','Mumbai',1999);

// const Student=function(name,address,year,course,sub1,sub2){
//         this.course=course;
//         this.sub1=sub1;
//         this.sub2=sub2;
//         Person.call(this,name,address,year)      //ithe apan person la call karun tyatil object call krtoy using this
// }
// Student.prototype=Object.create(Person.prototype)      //ithe student chya prototype la apan person chya protopye devun person madali info fetch karatoy by using Person.call()method as above
// const compStudent=new Student('sandy','India',2009,'MCS','Machine','database');
// console.log(compStudent);


// ** ES6 example**    ya eg madhe hiearchi lakshat thevayachi 1st object ast then person class then student class(prototype madhe yet te)
// class Person{
//         constructor(name,address,year){
//                 this.name=name;
//                 this.address=address;
//                 this.year=year
//         }
//         calAge=function()
//         {
//                 return 2021-this.year;
//         }    
// }
// class Student extends Person{
//         constructor(name,address,year,course,sub1,sub2)
//         {       
//                  super(name,address,year)
//                 this.course=course;
//                 this.sub1=sub1;
//                 this.sub2=sub2
//         }
// }
// const compStudent=new Student('sandy','pune',2009,'MCS','comp','Eng');
// console.log(compStudent)
// console.log(P.hasOwnProperty('name'))
// // ya madhe tya class chi ti property swatachi property ahe ki nahi he bhetat


//**  4) private property decaration** 
// class Person{
//                 constructor(name,address,year){
//                         this.name=name;
//                         this.address=address;
//                         this.year=year
//                 }
//                 calAge=function()
//                 {
//                         return 2021-this.year;
//                 }    
//         }
//         class Student extends Person{
//                 #sub1;
//                  #sub2;
//                 constructor(name,address,year,course,sub1,sub2)
//                 {       
//                         super(name,address,year)
//                         this.course=course;
//                         this.#sub1=sub1;
//                         this.#sub2=sub2
//                 }
//                 getSubject1()
//                 {
//                         return this.#sub1
//                 }
//                 getSubject2()
//                 {
//                         return this.#sub2
//                 }
//         }
//         const compStudent=new Student('sandy','pune',2009,'MCS','comp','Eng');
//         console.log(compStudent.getSubject1())
//         console.log(compStudent.getSubject2())
//         console.log(compStudent.name);
//         compStudent.name='abcd';         // sandy name change by abcd
//         console.log(compStudent.name)

  // 5) 
//   class Person{
//         constructor(name,address,year){
//                 this.name=name;
//                 this.address=address;
//                 this.year=year
//         }
//         calAge=function()
//         {
//                 return 2021-this.year;
//         }    
// }
// class Student extends Person{
//         #sub1;
//          #sub2;
//         constructor(name,address,year,course,sub1,sub2)
//         {       
//                 super(name,address,year)
//                 this.course=course;
//                 this.#sub1=sub1;
//                 this.#sub2=sub2
//         }
//         getSubject1()
//         {
//                 return this.#sub1
//         }
//         getSubject2()
//         {
//                 return this.#sub2
//         }
//         setSubject1(val){
//                 this.#sub1=val;
//         }
// }
// const compStudent=new Student('sandy','pune',2009,'MCS','comp','Eng');
// console.log(compStudent.getSubject1())
// console.log(compStudent.getSubject2())
// console.log(compStudent.name);

// compStudent.name='abcd';         // sandy name change by abcd
// console.log(compStudent.name);

// compStudent.setSubject1('web-design');
// console.log(compStudent.getSubject1())

//**  json format **
// 1.)
// const testURL=new XMLHttpRequest()
// testURL.open('GET','https://restcountries.eu/rest/v2/name/India')
// testURL.send()
// testURL.addEventListener('load',function(data){
//         // console.log(data);     // ya mule apn request kelela data aplyala bhetnar .. but to aplyala developer tool vr network madhe bhetato
//         console.log(data.currentTarget.response); // and ya mule apalyala tya request cha response aplya console vr print hoto 
// })

// 2.) step for access name AND Population
// const testURL=new XMLHttpRequest()
// testURL.open('GET','https://restcountries.eu/rest/v2/name/India')
// testURL.send()
// testURL.addEventListener('load',function(data){
       
//         console.log(data.currentTarget); 
//         const indiaData=JSON.parse(data.currentTarget.response)
//         console.log(indiaData[1].name)
//         console.log(indiaData[1].population)
// })

// 3.) population la convert kartoy
// const testURL=new XMLHttpRequest()
// testURL.open('GET','https://restcountries.eu/rest/v2/name/India')
// testURL.send()
// testURL.addEventListener('load',function(data){
       
//         console.log(data.currentTarget); 
//         const indiaData=JSON.parse(data.currentTarget.response)
//         console.log(indiaData[1].name)
//         console.log((+indiaData[1].population/10000000).toFixed(2)+'cr')   // tofixed is used for point ntr only two digit thevat te
// })


// const testURL=new XMLHttpRequest()
// testURL.open('GET','https://restcountries.eu/rest/v2/name/India')
// testURL.send()
// testURL.addEventListener('load',function(data){
       
//         console.log(data.currentTarget); 
//         const indiaData=JSON.parse(data.currentTarget.response)
//         console.log(indiaData[1].flag)
//         console.log((+indiaData[1].population/10000000).toFixed(2)+'cr')   // tofixed is used for point ntr only two digit thevat te
//         // document.getElementById('headline').innerHTML='<img widh="200px" height="200px" src="'+indiaData[1].flag+'">'
//         document.write(`<img height="100" widh="100" src="${indiaData[1].flag}">`)
// })



function demo(name){
const testURL=new XMLHttpRequest()
testURL.open('GET','https://restcountries.eu/rest/v2/name/'+name)
testURL.send()
testURL.addEventListener('load',function(data){
       
        console.log(data.currentTarget); 
        const indiaData=JSON.parse(data.currentTarget.response)
        console.log(indiaData[1].flag)
        console.log((+indiaData[1].population/10000000).toFixed(2)+'cr')   // tofixed is used for point ntr only two digit thevat te
        // document.getElementById('headline').innerHTML='<img widh="200px" height="200px" src="'+indiaData[1].flag+'">'
        document.write(`<img height="100" widh="100" src="${indiaData[1].flag}">`)
})

}
demo('india')
// demo('china')





// ################### Data Feching by using req and res#######################################
// const demoURL=new XMLHttpRequest()
// demoURL.open('GET',)










