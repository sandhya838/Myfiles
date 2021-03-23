var height=prompt("pls enter your height in meter");
var weight=prompt("pls enter your weight in kg");
var BMI=weight/(height*height);

if(BMI <18.4);
alert("your bmi is" +BMI+ "you are underweight");
if(BMI >18.4 && BMI <24.9);
 alert("your bmi is" +BMI+ "you are normal weight");
if(BMI >25 );
 alert("your bmi is" +BMI+ "you are over weight");


