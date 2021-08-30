//%%%%%%%%%%%%%% https://www.javatpoint.com/javascript-tutorial %%%%%%%%%%%%%%%%%%%%%%%
// variable rules and declaration..
// var x=5;
// console.log(typeof x);


// var y="sandy";
// console.log(typeof y);

// var z=true;
// console.log(typeof z);

//  console.log(typeof a);

 //var _4="sandy";
 //console.log(_4);

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

   // var per=prompt("plz enter your 10th %");
   //  alert(per);



// **all about DOM b using id**

// console.log(document.getElementById("fpara").innerHTML);
//  console.log(document.getElementById("fpara").outerHTML );
// console.log(document.getElementById('demo').innerHTML=5+6);

// ** about opacity **
// document.getElementById("fpara").style.opacity="0"  ;
// document.getElementById("fpara").style.opacity="none" ;

// ** about document **
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

// ** Object Defination **
// var person= {
//     name: "sandy",
//     age: 23,
//     address:"pune"
// }
// console.log(person);



//declare function and pass value by using "this" keyword

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


// Closure function 
// var Student=function(name,year,address)
//  {
//     this.name=name;
//     this.dob=year;
//     this.address=address;
//     this.Age=function() {return 2021-this.dob } //this keyword use karun 1 age ghetal n tyalach function assign karun return value keli..closure property bolato
// }
 //var abc= new Student("sandy",1990,"pune"); //abc 1 variable create karun tyalach apan Student variable throuth value assign kelyat..
// var pqr= new Student("manoj",1998,"nashik");
// var lmn= new Student("kukya",1996,"mumbai");
 //console.log("the current age of Student abc is"+ " " +abc.Age()); //ithe apan age madhe aleli value print kartoy
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
// console.log(getDriverLicenceAge(21)(1995));


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



// function demo(name){
// const testURL=new XMLHttpRequest()
// testURL.open('GET','https://restcountries.eu/rest/v2/name/'+name)
// testURL.send()
// testURL.addEventListener('load',function(data){

//         console.log(data.currentTarget); 
//         const indiaData=JSON.parse(data.currentTarget.response)
//         console.log(indiaData[1].flag)
//         console.log((+indiaData[1].population/10000000).toFixed(2)+'cr')   // tofixed is used for point ntr only two digit thevat te
//         // document.getElementById('headline').innerHTML='<img widh="200px" height="200px" src="'+indiaData[1].flag+'">'
//         document.write(`<img height="100" widh="100" src="${indiaData[1].flag}">`)
// })

// }
// demo('india')
// demo('china')





// ################### Data Feching by using req and res#######################################
// const demoURL=new XMLHttpRequest()
// demoURL.open('GET',)





// ################ Array Methods ###################### //****** String method *******   // https://www.w3schools.com/jsref/jsref_obj_string.asp 
//  let a=[1,2,3,4,5];
//  let b=[6,7,8,9,10];
//  let c="sandhya";

 //console.log(c[0])     //accessing only one character 
//console.log(c[0].toUpperCase() + c.toLowerCase().slice(1))
//  console.log(a.concat(b).concat(c))
//console.log(a.concat(b).concat(c.split('')))
// console.log([...a,...b,...c])                       // Destucturing 
// console.log(...c)
//const[first,,third,...rem]=a;
//console.log(first,third,rem)
// let a=[1,2,3,4,5,6,7,8];
// let b=[6,7,8,9,10];
// c=[...a,...b]
// console.log(c)
//  console.log(new Set(c)); //dulication remove karat



const country = [
   {
      "name": "British Indian Ocean Territory",
      "topLevelDomain": [
         ".io"
      ],
      "alpha2Code": "IO",
      "alpha3Code": "IOT",
      "callingCodes": [
         "246"
      ],
      "capital": "Diego Garcia",
      "altSpellings": [
         "IO"
      ],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 3000,
      "latlng": [
         -6.0,
         71.5
      ],
      "demonym": "Indian",
      "area": 60.0,
      "gini": null,
      "timezones": [
         "UTC+06:00"
      ],
      "borders": [

      ],
      "nativeName": "British Indian Ocean Territory",
      "numericCode": "086",
      "currencies": [
         {
            "code": "USD",
            "name": "United States dollar",
            "symbol": "$"
         }
      ],
      "languages": [
         {
            "iso639_1": "en",
            "iso639_2": "eng",
            "name": "English",
            "nativeName": "English"
         }
      ],
      "translations": {
         "de": "Britisches Territorium im Indischen Ozean",
         "es": "Territorio Británico del Océano Índico",
         "fr": "Territoire britannique de l'océan Indien",
         "ja": "イギリス領インド洋地域",
         "it": "Territorio britannico dell'oceano indiano",
         "br": "Território Britânico do Oceano íÍdico",
         "pt": "Território Britânico do Oceano Índico",
         "nl": "Britse Gebieden in de Indische Oceaan",
         "hr": "Britanski Indijskooceanski teritorij",
         "fa": "قلمرو بریتانیا در اقیانوس هند"
      },
      "flag": "https://restcountries.eu/data/iot.svg",
      "regionalBlocs": [
         {
            "acronym": "AU",
            "name": "African Union",
            "otherAcronyms": [

            ],
            "otherNames": [
               "الاتحاد الأفريقي",
               "Union africaine",
               "União Africana",
               "Unión Africana",
               "Umoja wa Afrika"
            ]
         }
      ],
      "cioc": ""
   },
   {
      "name": "India",
      "topLevelDomain": [
         ".in"
      ],
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "callingCodes": [
         "91"
      ],
      "capital": "New Delhi",
      "altSpellings": [
         "IN",
         "Bhārat",
         "Republic of India",
         "Bharat Ganrajya"
      ],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 1295210000,
      "latlng": [
         20.0,
         77.0
      ],
      "demonym": "Indian",
      "area": 3287590.0,
      "gini": 33.4,
      "timezones": [
         "UTC+05:30"
      ],
      "borders": [
         "AFG",
         "BGD",
         "BTN",
         "MMR",
         "CHN",
         "NPL",
         "PAK",
         "LKA"
      ],
      "nativeName": "भारत",
      "numericCode": "356",
      "currencies": [
         {
            "code": "INR",
            "name": "Indian rupee",
            "symbol": "₹"
         }
      ],
      "languages": [
         {
            "iso639_1": "hi",
            "iso639_2": "hin",
            "name": "Hindi",
            "nativeName": "हिन्दी"
         },
         {
            "iso639_1": "en",
            "iso639_2": "eng",
            "name": "English",
            "nativeName": "English"
         }
      ],
      "translations": {
         "de": "Indien",
         "es": "India",
         "fr": "Inde",
         "ja": "インド",
         "it": "India",
         "br": "Índia",
         "pt": "Índia",
         "nl": "India",
         "hr": "Indija",
         "fa": "هند"
      },
      "flag": "https://restcountries.eu/data/ind.svg",
      "regionalBlocs": [
         {
            "acronym": "SAARC",
            "name": "South Asian Association for Regional Cooperation",
            "otherAcronyms": [

            ],
            "otherNames": [

            ]
         }
      ],
      "cioc": "IND"
   }
]
//   const[firstEle=[],secondEle=[],...rem]=country;
//   const {name,region,population,capital,altSpellings}=secondEle;
//   const[m,p]=altSpellings;
 //console.log(name,region,population,capital)
// console.log(m,p)
// console.log(country[0])
// const[firstEle=[],secondEle=[],...rem]=country;
//  const{currencies,altSpellings,borders,}=secondEle;
//  const {name:currName}=currencies[0];
//  console.log(currName);
//  console.log([...altSpellings,...borders]);

// let s={
//   key1:'test1',
//   key2:'test2',
//   key3:'test3',
//   key4:'test4'
// }
//const{key1,key2,...rem1}=s
//console.log(key1,key2,rem1)

//################# Destructuring ########################
// const [first,,third]=['foo','bar','baz']   //desrtucturing example [1]
// console.log(third,first)
// const [head, ...tail]=[1,2,3,4,5]  //ex[2] we can access remaining elt by using rest operator
// console.log(tail)

//********* Desrtuctureing Object *****************   https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
// const robotA = { name: "sandy" };
// const robotB = { name: "remo" };

// const { name: nameA } = robotA;
// const { name: nameB } = robotB;

// console.log(nameA,nameB);
// console.log();



//############# 25-03-021 #############
// const test=
//     'Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const data=test.split('+');  // yat apan split through data separate kela using + bcz two statement connect by +
// console.log(data)  
// ata aplyala 1ka propery madhale item separate karayahche ahet tr tya sathi kay karayach ki te kashyane attach ahet ; ne so apan split method use karun tyat';' pass karaych 
//console.log(data[0].split(';'))    //ithe position vrn mhnje 0 index ne apan 1st elt acccess kela n tyala split() ne ';' ne separate kel so o/p madhe tyatale item separate bhetale array madhe 
//console.log(data[1].split(';'))    // same tasach --ithe 1 index ne apan 2d elt acccess kela
//console.log(data[2].split(';'))    //same 
//console.log(data[3].split(';'))    // same

//const [firstEle,secondEle,thirdEle,fourtEle]=test.split('+'); //yat aplyakade 4 type ahet so tyasathi variable gehtale n tayna split kele by ; ne
// console.log(test);
// console.log(firstEle.split(';'));     // yat je variable assign kele tayna tyana aplyala separate karayach ahe so apan tayna punhs split through separate kele by ;
// console.log(secondEle.split(';'));   //same as above
// console.log(thirdEle.split(';'));
// console.log(fourtEle.split(';'));

// ata varachi process lenghthi vatati so apan for loop through easy karu shakato 
//tayt pn 3 types che loop yetat 
//  1]for of   
            // for(const fDAta of test.split('+'))
            // {
            //   const [type,from,to,time]=fDAta.split(';');
            //   console.log(`The flight is ${type} comming ${from} to ${to} on ${time}`);
            // }

 // 2]  for loop only  
         //   const data=test.split('+'); 
         //   //console.log(data)  
         //   for(let i=0; i<test.split('+').length; i++)
         //   {
         //       const subData=data[i].split(';')
         //       console.log(`The flight is ${subData[0]} comming ${subData[1]} to ${subData[2]} on ${subData[3]}`)
         //   }


 //  3] for each
           



//########## using replace method  ###############
 //let test='Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//    const firstData=test.substr(0,test.indexOf('+'));
//    console.log(firstData);

//    test = test.replace(firstData,'')
//    test = test.slice(1)
//    const secondData=test.substr(0,test.indexOf('+'))
//    console.log(secondData);

//    test=test.replace(secondData,'');
//    test=test.slice(1);
//    const thiredData=test.substr(0,test.indexOf('+'));
//    console.log(thiredData);

//    test=test.replace(thiredData,'')
//     test=test.slice(1);
//     const fourthData=test.substr(0,test.indexOf('+'))
//   console.log(test);
//############# using FOR loop ################
// const allData= test.split('+');
// for (const i of allData)
// {
//    let subarr = i.split(';')
//    console.log (console.log(`The flight is ${subarr[0]} comming ${subarr[1]} to ${subarr[2]} on ${subarr[3]}`))
// }


//####### map ######
//   let dataMap=new Map();
//   dataMap.set('first',12345);
//   dataMap.set(1,'test123');
//   dataMap.set([1,2,3,4],'myarray as a key');
//   dataMap.set(true,12345678);
//   console.log(dataMap);
//   console.log(dataMap.get(1))
//   console.log(dataMap.get('first'))
//   console.log(dataMap.get(true))
  
//####### Regular Expretion ########
//  /j/ <= in this we can search NY word or letter in our statement but only first match is on our o/p  
//  /i/g  <= g is global i.e., all matches are in o/p its work like continoue search the letter 
// /i/i   <= i  is insenitive that means in upper case its only show the letter or word that we can assign , if we want to access upper case then use i
// \d    <= for accesing all digit/number in our sentense
// \D   <= access non digit 
// \w  <= 0-9 a-z A-Z 
 //console.log('internship class for js'.match(/class/))       //1]
 //console.log('internship class for js on monday In 7oclock'.match(/i/gi))  
 //console.log('internship class for js on monday 12/04/2021 In 7oclock'.match(/\d/gi))
 //console.log('101tresha102mukta'.match(/\D/gi)) 
// console.log('75 out 100'.match(/\s\d/gi))     // o/p=1
 //console.log('75 out 100'.match(/\s\D\D/gi))    // ou         
//  let str="+7(907)-123-23-45";
//  let str1='12,223,000'
//  console.log(str.match(/\d/g))    // all numb
// console.log(str.match(/\d/g).join(''))    // only no print karaych special charactre sodun
//console.log(str1.match(/\d/g).join('')) 
// another way to access only number withot special character
// console.log(str.replace(/\D/g,''))
// let regexp = /CS.\d/;
// console.log( "CS 4".match(regexp) );
// let regexp = /CS.4/;
// console.log( "CSS4".match(regexp) );
// let regexp = /CS..4/;
// console.log( "CSas4".match(regexp) );
// let regexp = /CS..4/;
// console.log( "CS  4".match(regexp) );
// let regexp = /CS...4/;
// console.log( "CSs 04".match(regexp) );
// let str3='test123'
// console.log(str3.match(/\d$/g));
// let str3=`1name1:sandy1,
//             2name:sandesh`;
// console.log(str3.match(/\^s\d$/gm));

//################## 27-03  #######################
// $$$$$$$$$ \d boundry  this is specified by boundry of any word $$$$$$$$$$$
// console.log("hello ,java!".match(/\bhello\b/));      // hello
// console.log("pphello ,java!".match(/\bhello\b/)) ;    // null
//console.log("hello ,java+".match(/\bjava\b/));       //yat jari word chya shevati speciaal char asel tri to access krto 
//console.log("hello ,javascript!".match(/\bjava\b/)); // but connect word madan jar 1ch word hava asel tr to ghet nahi 
// console.log("1 23 144 45".match(/\b23\b/));           // 23
//console.log("1 23 144 45".match(/\b\d\b/g)) ;              // 1
// console.log("1 23 144 45".match(/\b\d\d\b/g));          // 23 45
//console.log("kaddy 23 144 45".match(/\b\D\D\D\D\D\b/g));     // kaddy

//$$$$$$$$$$$$$$ escap character $$$$$$$$$$$$$$$$
      // if we want to print special char in o/p we can assign \^,$,*,@,+,.
//console.log("1 ^23 144 34".match(/\^\d\d/g));             //^23
//console.log("1 23 144 34$".match(/\d\d\$/g));             //34$
//console.log("1 23@ 14*4 34$".match(/\d\d\*/g));           //14*
//console.log("1 23@ 14*4 34$".match(/\d\d\@/g));            //23@
//console.log("1 23@ 14*4 34$".match(/\d\d[\@ \$ \*]/g)); // 23@ 14* 34$=>[]in this we can assign grp i.e., if we want to access all elt in at a time we can [\@ \$ \*] this 
//console.log("1 23@ 14*4 34$2 34.7".match(/\d\d[\@ \$ \* \.]\d/g));   // 14*4 34$2 34.7
//console.log("1sandy2.0 122.23".match(/\dsandy\d\./g));    //1sandy2.

//$$$$$$$$$$$$ Range $$$$$$$$$$$
   //we can specify the range like[0-9]  this is helpful for set range for email password  
//  console.log("2a3 223 asc".match(/[0-9][a-z][0-9]/));    // 2a3
//  console.log("2a3 223 asc 1w5%".match(/[0-9][a-z][0-9][.^$*%]/));   // 1w5%
// console.log("2a3 223 asc 1W5%".match(/[0-9][a-z][0-9][.^$*%]/));     //null bcz capital W
// console.log("2a3 223 asc 1W5%".match(/[0-9][a-z][0-9][.^$*%]/i));    //1W5%    bcz we can declare i-incensitive condition
// console.log("2a3 223 asc 1W5%".match(/[0-9][A-Z][0-9][.^$*%]/));      //1W5%   bcz we can apply condition [A-Z]
// console.log("rat mat".match(/[mr]at/g));   //rat mat    bcz we can apply condition[mr]at i.e m or t ya paiki koni asel tr chalel n end la at pahije  
// console.log("sandy candy".match(/[sc]andy/g));  // sandy candy
// console.log("sandy cndy".match(/[sc]ndy/g));  //cndy
// console.log("Exception 0xAF".match(/x[0-9A-Z][0-9A-Z]/g));   //xAF
// console.log("Exception 0x4F".match(/x[0-9A-Z][0-9A-Z]/g));  //x4F
// console.log("Exception 0xAFp".match(/0[0-9a-z][0-9A-Z][0-9a-zA-Z]/g));  //0xAF
// console.log("Exception 0xAFp".match(/[0-9a-z][0-9A-Z][0-9A-Z][0-9a-zA-Z]/g));  //xAFp
// varchya ex madhe aplyala tya condition khupada ghyavya lagtat so tya sathi apan { }ya madhe devu shakato ki kiti time aplyala havay te 
 //console.log("Exception 0xAFp".match(/[0-9a-zA-Z]{4}/g));  //Exce ptio 0xAF
// console.log("we are 100 times better and Powerful".match(/[a-z0-9]{8}/gi)); //Powerful
 //console.log("we are 4 100 times better and Powerful".match(/[a-z0-9]{1,3}\s/gi));   //we are 100 mes ter and 
// console.log("we are 100 times better and Powerful".match(/\s[a-z0-9]{1,3}\s/gi)); //are and
// console.log(" a We are 100 times better and Powerful".match(/\s[a-zA-Z0-9]{1,}\s/gi)); //a  are  times and 
//console.log("kashamir kulu manali 102sector".match(/\s[a-zA-Z0-9]{7,}/gi));  //102sector
//console.log('sandy01@gmil.com'.match(/[a-z0-9@.]{0,}/))  //sandy01@gmil.com
   //let regexp=/[-.*^()/+$@]/g;
//console.log('2^2 + 4 *3'.match(regexp))    // ^ + *
// console.log('(2^2) + (4 * 3)'.match(regexp))   //( ^ ) + ( * )
//console.log('(4-1*12/2)@answer is 2'.match(regexp)) //-*( ) /@

//console.log('I am not 100 years but 1234 years old'.match(/\d{3,}/g))  //100 1234
//console.log('I am not 100 years but 1234 years old'.match(/\w{3,}/g)) //not 100 years but 1234  years old 
//let str='+7(903)-123-45-67';
//let number=str.match(/\d{1,}/g);
//console.log(number);   //7 903 123 45 67
  // let number=str.match(/\d{3,}/g);
  // console.log(number);     //903 123
  
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  // apan { }ya madhe range det hoto tr tyala opetion special character use karun pan ahe ..
        //1]   {1,}= +
        //2]   {0,}= *
        //3]   {0,1}= ?
// eg
// console.log('Lion is the national animal of India'.match(/\w*/g));   // Lion  is  the  national  animal  of  India   // ya madhe 0 la space include hoto 
// console.log('Lion is the national animal of India'.match(/\w+/g));   // Lion is the national animal of India
//console.log('   Lion is the national animal of India'.match(/\s\w?/g));  // L i t n a o I
//console.log('divya has 1 daugther'.match(/\s\d?\s/g));    //1
//let str='+7(903)-123-45-67';
//let number=str.match(/\d?/g);     //"", "7", "", "9", "0", "3", "", "", "1", "2", "3", "", "4", "5", "", "6", "7", ""   yat space n special character la pan to count karto as a 0 position
//let number=str.match(/\d\d?/g);     //"7", "90", "3", "12", "3", "45", "67"
//console.log(number); 
//let str = "Should I write color or colour?";
//console.log(str.match(/colou?r/g));     // "color", "colour"   yacha meaning asa hoto ki u mala 0time pahije kivha 1 mhnje nasala tri chalel kivha asla tari chalel
    //let str = "Should I write colour or colooooour?";
   //console.log(str.match(/colo+ur/g));   // "colour", "colooooour"
   //let str = "Should I write colou or colour?";
   //console.log(str.match(/colour*/g));    //"colou", "colour"
   // console.log('10000 1000 100 10 1  '.match(/\d+/g));  //"10000", "1000", "100", "10", "1"
   // console.log('10000 1000 100 10 1'.match(/\d*/g));   //"10000", "", "1000", "", "100", "", "10", "", "1", ""
   // console.log('10000 1000 100 10 1'.match(/\d?/g));  //"1", "0", "0", "0", "0", "", "1", "0", "0", "0", "", "1", "0", "0", "", "1", "0", "", "1", ""
// console.log('0 1 12.345 7890'.match(/\d+\.\d+/g));     // "12.345"
// console.log('0 1 12.345 7890'.match(/\d+\d+/g));       // "12", "345", "7890"
// console.log('0 16.6.6556.46666 12.345'.match(/\d+\.\d+\.\d?/g));    //"16.6.6"
// console.log('0 16.6.6556.46666 12.345'.match(/\d+\.\d+\.\d+/g));    //"16.6.6556"
// console.log('0 16.6.6556.46666 12.345'.match(/\d+\.\d+\.\d*\.\d/g));    //"16.6.6556.4"
// console.log('<h1>Hi!</h1>'.match(/<[/0-9a-z]*>/gi));    // "hi"  
//console.log('<h1>Hi!</h1>'.match(/<[/0-9a-z]*>/gi));          //"<h1>", "</h1>"
//console.log('<h1>Hi!</h1>'.match(/<[a-z][0-9a-z]*>/gi));

//$$$$$$$$$$$$$$$$$$$$$ Captiring group $$$$$$$$$$$$$$$$$$$$$$$$$$$
// console.log('Gogogo now'.match(/(go)*/gi));     //"Gogogo"
// console.log('Gogogo now'.match(/(go)*/gi));     //"Gogogo", "", "", "", "", ""

//$$$$$$$$$$$$$$$$$ Alteration OR|$$$$$$$$$$$$$$$$$$
//let regexp = /html|php|css|java(script)?/gi;
// // let str="first HTML appeared then CSS , then JavaScript";
// // console.log(str.match(regexp));      //"HTML", "CSS", "JavaScript"
// let regexp = /html|php|css|java(script)?/gi;
//  let str="first HTML appeared, then CSS , then JavaScript and JAVA";
//  console.log(str.match(regexp));        //"HTML", "CSS", "JavaScript","JAVA"

// let condition = /(\w+\.)+\w+/g;
// console.log("site.com my.site.com".match(condition));    //"site.com", "my.site.com"
// let condition = /(\w+\.)+\w+\.+/g;
// console.log("site.com my.site.com".match(condition));    // my.site.

// let condition= /[-.\w]+@([\w-]+\.)+[\w-]+/g;
// console.log('my@gmail.com @ his@gmail.com.uk'.match(condition));     //"my@gmail.com", "his@gmail.com.uk"

// let condition= /[-.\w]*@([\w-]+\.)+[\w-]+/g;
// console.log('my@g-mail.c-om @ his@gmail.com.uk'.match(condition));   //"my@g-mail.c-om", "his@gmail.com.uk"

//######################### DOM ###################################
//---------------Identification of Node and Element------------------
// console.log(document.documentElement); 
// console.log(document.head);
// console.log(document.body);

//----------------- Document -----------------------------
//1] querySelector()
// const test=document.querySelector('.header');
// console.log(test);
        // OR
  //console.log(document.querySelector('.header'));       //return single node
  
  //2] queySelectorAll()
//console.log(document.querySelectorAll('.paras'));     //return node list

//3] getElementById()
//console.log(document.getElementById("method"));          //return id node       

//4]getElementByClassName()
//console.log(document.getElementsByClassName('paras')); 

//5]getElementByTagName()
//console.log(document.getElementsByTagName('input'));

//--------------- run time change in Document -------------------- Error ahe Change nahi hot //
//2] queySelectorAll()
//console.log(document.querySelectorAll('.paras')); 
//5]getElementByTagName()
//console.log(document.getElementsByTagName('input'));

   
//------------Creating and Insert Element----------------------
// let newDiv = document.createElement('div');
// newDiv.classList.add('cookie-newElement');
// newDiv.innerHTML='We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Click Me</button>';
//document.querySelector('header').append(newDiv);              //end chya Adhi
//document.querySelector('header').prepend(newDiv);             //Start jhalya jhalya
//document.querySelector('header').after(newDiv);               // header chya nantar
//document.querySelector('header').before(newDiv);              // header chya adhi
//document.querySelector('header').append(newDiv.cloneNode(true));    //make copy if elt all ready exist tari pn to copy karato 
//document.querySelector('header').append(newDiv.cloneNode(false));   //make copy if not exist


//------------ Delete Element ---------------------
//   let newDiv = document.createElement('div');
//  newDiv.classList.add('cookie-newElement');
//   newDiv.innerHTML='We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Click Me</button>';
//  document.querySelector('header').prepend(newDiv); 

// document.querySelector('btn--close-cookie');
// document.addEventListener('click',function(){
// newDiv.parentElement.removeChild(newDiv);
//          //or method
//       newdiv.remove() ;  
// });


//-----------Styles and Attribute and  Classes---------------
//1] Style
// newDiv.style.backgroundColor='skyblue';                  //globaly clr deto ani ha clr html madhe mnhje browser vr element madhe html chya style la pn disato .
// newDiv.style.width='110%';
// newDiv.style.fontSize='35px'
// newDiv.style.paddingBottom='20px'

// console.log(getComputedStyle(newDiv).backgroundColor);             //console vr color disato   o/p=>rgb(135, 206, 235)
// console.log(getComputedStyle(newDiv).width);                       //o/p=>1671.11px
// console.log(getComputedStyle(newDiv).fontSize);                    //o/p=>35px
// console.log(getComputedStyle(newDiv).paddingBottom);               //o/p=>20px

//suppose we want to increase or decrease hight or width at run time we can.. this clr shown in browser elt in html code
// let newDiv = document.createElement('div');
// newDiv.classList.add('cookie-newElement');
// newDiv.innerHTML='We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Click Me</button>';
// document.querySelector('header').prepend(newDiv); 
// console.log(getComputedStyle(newDiv).height);
// console.log(getComputedStyle(newDiv).width);
// newDiv.style.width=Number.parseFloat(getComputedStyle(newDiv).width,10) + 30 + 'px';  // here 10 for decimal number mnje aplyla kashyat convert karayach tya sathi ahe te
// newDiv.style.height=Number.parseFloat(getComputedStyle(newDiv).height,10) + 40 + 'px';

//same things we can change the clr n all ... in this we can change the clr
// let newDiv = document.createElement('div');
// newDiv.classList.add('cookie-newElement');
// newDiv.innerHTML='We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Click Me</button>';
// document.querySelector('header').prepend(newDiv);
// newDiv.style.backgroundColor='skyblue'; 
// // not woking
// console.log(document.documentElement.style.getPropertyValue('skyblue'));
// document.documentElement.style.setProperty('skyblue','red')


//---------------- Attribute -----------------   change alt name 
// const changeLogo=document.querySelector('.header_logo');
// console.log(changeLogo.alt);            // yat console vr print karatoy ki tya alt la name kay dil ahe
// console.log(changeLogo.className);      // yat tya alt chya class ch name display karato 
// changeLogo.alt='beautiful mini logo';   // change the name of alt 

         // change button type dynamicaly
// const btnTypeChange=document.querySelector('.btn-1');
// console.log(btnTypeChange.type);  
//  console.log(btnTypeChange.className);
//  btnTypeChange.type='Its a button'; 

//-------------------- Non-Standard -------------------------
//1]
// const changeName=document.querySelector('.header_logo');
// console.log(changeName.getAttribute('designer'));   
// changeName.setAttribute('designer','test')
// console.log(changeName.getAttribute('designer'));

// 2]
// const getPath=document.querySelector('.header_logo');
// console.log(getPath.getAttribute('src'));
// console.log(getPath.src);

// 3]
// const link=document.querySelector('class_name');
// console.log(link.href);
// console.log(link.getAttribute('href'));

//------------------- Classes -----------------------------
// const changeName=document.querySelector('header');
// changeName.classList.add('test');           // class name add hot ... je tyala assign kel tyachya sobatach add hot
//changeName.classList.remove('test');           // jr remove() method madhe name aslel html madhe asel tr remove hot  // yat adhi html madhe test add karaych
// changeName.classList.toggle('test');        // jr name all ready exist asel tr delete karat n nasel tr add karato
// changeName.classList.contains('test');      // no idea what happend exactly



//31-03-2021  ------------ Event --------------
//1] Bubbling
//below statement madhe kay hot ki jevha mi india vr click karato tevha click 1 event fire krt te mhje change the backgroundColor red
// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor="red";
// })

//ata apan purn hierarchi vr event fire kela tr kay honar,ki jri apan last child vr click kel tari tya child chya adhicha child vr pn event occure honar then tyachya parent var n mg body var
// for eg====yat bubbling hot mnhje child kadan parent kade event through chi hirarchi jate like bottom to up
// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor="red";
//    console.log('.heading-primary--main');
// })
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor="yellow";
//    console.log('.header_text-box');
// })
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor="green";
//    console.log('.header');
// })
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor="lightgray";
//    console.log('body');
// })
// jari apan only header chya section vr click kel tr only header ani tyacha jo parent ahes mnhje body tyacha parent ahe so te 2ghech occure honar 



// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
// })
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
// })
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
// })
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
// })

// OR
// yat only to target dakhvnar mhje apan jya vr click kel to ani jar tyala parent asel tr to pn but yat bubble phase madhe work hot adhi child ani mg parent
// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log(e.target);
//    console.log('.heading-primary--main');

// })
// document.querySelector('.header_text-box').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log(e.target);
//    console.log('.header_text-box');
// })
// document.querySelector('.header').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log(e.target);
//    console.log('.header');
// })
// document.querySelector('body').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log(e.target);
//    console.log('body');
// })

//1] Bubble Pase      => bottom to top
//mhje adhi chid vr event fire hoto ani mg parent vr

// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.heading-primary--main');
// })
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header_text-box');
// })
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header');
// })
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('body');
// })


//2] Capture Pase      =>top to bottom
//ya method madhe aplyala thir caption add karav lagat te mnhje " TRUE " jr true dil trch to event fire honar

// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.heading-primary--main');
// },true)
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header_text-box');
// },true)
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header');
// },true)
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('body');
// },true)

// 2] suppose 1dya element vr mala event fire nahi karayacha tr mi tyala true denar nahi but jr tyachya ntr cha mhnje tyachya Child la jr event TRUE asel tr to fire honar

// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.heading-primary--main');
// })
// document.querySelector('.header_text-box').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header_text-box');
   
// },true)
// document.querySelector('.header').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('.header');
// })
// document.querySelector('body').addEventListener('click',function(){
//    this.style.backgroundColor=randomClr();
//    console.log('body');
// },true)

// 3] jr aplyala te propagation stop karaych asel tr tyasathi .stopPropagation() method use karayachi

// const randomInt=(min ,max) => Math.floor(Math.random() * (max -min + 1) + min)
         
// const randomClr=()=>
//          `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.heading-primary--main').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log('.heading-primary--main');
//    e.stopPropagation();
// })
// document.querySelector('.header_text-box').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log('.header_text-box');
   
// },true)
// document.querySelector('.header').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log('.header');
//    e.stopPropagation();
// })
// document.querySelector('body').addEventListener('click',function(e){
//    this.style.backgroundColor=randomClr();
//    console.log('body');
//    e.stopPropagation();
// })






// var materials = [
//    'Hydrogen',
//    'Helium',
//    'Lithium',
//    'Beryllium'
//    ];
   
//    console.log(materials.map (material => material.length));

  // var materials = [
      // 'Table',
      // 'Chair',
      // 'Boxes',
      // 'Press'
      // ];
      
      // console.log(materials.map (material => material.length));












