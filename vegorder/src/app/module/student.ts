export interface Student{
    fName:string,
    lName:string,
    age:number,
    mobile:number,
    class:any,
    year:any,
    rno:any,
    Subjects?:['Marathi','Hindi','Sanskrut','Engish','SocialScience']
    marks?:{
      Marathi:number,
      Hindi:number,
      Sanskrut?:number,
      English:number,
      SocialScience:number
    }
   
   }
  