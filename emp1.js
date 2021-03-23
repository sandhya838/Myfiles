//******************* basic of JSON ***************
// 1] convert js object into JSON object
        // const myObj= {
        //     name:'sandy',
        //     addr:'pune',
        //     age:23
        // }
        // const myJSON=JSON.stringify(myObj);    // stringify covert the js object into JSON
        // console.log(myJSON);

 // 2] convert JSON object into javascript object
        // const myJSON={
        //     "name":"sandy",
        //     "addr":"pune",
        //     "age":23
        // };
        // const myObj=JSON.parse(myJSON);
        // console.log(myObj.name);


















const id=document.getElementById("empID");
const email=document.getElementById("empEmail");
const salary=document.getElementById("empSal");
const button=document.getElementById("btn");

button.addEventListener('click',async()=>{
    const obj={
                id:id.value,
                email:email.value,
                salary:salary.value
    }

        const data = await fetch("http://localhost:3000/employees", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        // const res = await data.json()    // he comment kel ahe bcz khali apan tyach use krt ahe // jevha ithe use karayach tevha he comment kadhayach ani khalach comment karayach 
        // console.log(res);


// *************** how to add data in [local-sorage] ********************
//*********************** this is the next concept it is after fetching/store the data in table format ***********
const res = await data.json()   
console.log(res);
const allData=JSON.parse(localStorage.getItem('newData'))
allData.push(res);
localStorage.setItem('newData',JSON.stringify(allData));
});


// ******** Store response in table format **********
    function getData(){
        const data=fetch(`http://localhost:3000/employees`)
        .then(response=>response.json())
        .then(data=>{
            // console.log("Data fetched...!")     // he statement just checking sathi ahe ki apala data fetch hotoy ka 
            // console.log(data.lenght)           // he statement pn just cheching sathi ch ahe ki apala data insert hot ahe ka .JSON file madhe 
          let i=0;
          let html=''; 
            for( i=0;i<data.length;i++){
                 html +=`<tr>
                <td>${data[i].id}</td>
                <td>${data[i].email}</td>
                <td>${data[i].salary}</td>
                </tr>`;
                
                };
                // console.log(data);
                function demoFind(){
                    return 
                }
                document.getElementById('mainId').innerHTML=data.find('101');
                document.querySelector(".tbl-1").innerHTML+=html;
                document.querySelector(".table-container");
                localStorage.setItem('newData',JSON.stringify(data));   // this line is for set the data in localstore 
                
            })
          
        }
        
               getData();
        
       


        // ***************** Replacing of FOR lop by .map method ************* but NOT WORKING%%%%%%%%%%%%

        // function getData(){
        //         const data=fetch(`http://localhost:3000/employees`)
        //         .then(response=>response.json())
        //         .then(data=>{
        //             console.log("Data fetched...!")     // he statement just checking sathi ahe ki apala data fetch hotoy ka 
        //             console.log(data.length) 
        //             let html=`<table>`;
        //             const tableDemo="<table>";
        //             const newData= data.map(
        //                 a =>
        //                 `<tr class="table>
        //                 <td>${a.id}</td>
        //                 <td>${a.email}</td>
        //                 <td>${a.salary}</td>`

        //             )
        //             console.log(newData.toSring());
        //             hmtl += newData.toSring();
        //             html = html + '</table>';
        //             document.querySelector(".tbl-1").innerHTML=html;
        //             document.querySelector(".table-container").style.opacity=1;
        //             })
        // }
        // getData();
    