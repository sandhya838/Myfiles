const MongoClient = require('mongodb').MongoClient;
const url='mongodb://localhost:27017';
const dbname='EmployeeDB';
MongoClient.connect(url, function(err,Client) {
  if (err) throw err;
  var db = Client.db("EmployeeDB");

  //Insert Data 
//   var data=[{EID:101,EName:'Raju Shaha',City:'Pune',WorkExp:'4 yrs'},{ EID:102,EName:'Nitin Rahu',City:'Andrapradesh',WorkExp:'2 yrs'},{EID:103,EName:'Ketan Jaid',City:'Mumbai',WorkExp:'5 yrs'}];
//  db.collection('Employees').insertMany(data,function(err,res){
//     if(err) throw err;
//     console.log("Document Iserted Successfully...!");
//     console.log(res);
//   })

  // Delete one Data 
  // db.collection('Employees').deleteOne();
  // var myQuery={EID:103};
  // db.collection('Employees').deleteOne(myQuery,function(err,result){
  //   if(err) throw err;
  //   console.log("1 Document Deleted Successfully...!");
  // })

  //delete Many Document
  db.collection('Employees').deleteMany();
  var myQuery=({EID:103},{EID:102});
  db.collection('Employees').deleteMany(myQuery,function(err,result){
    if(err) throw err;
    console.log("Many Document Deleted Successfully...!");
    
  })
  Client.close();
});
  


