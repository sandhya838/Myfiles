var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
var dbName="StudentDB";
MongoClient.connect(url,function(err,Client){
  if(err) throw err;
  var db=Client.db('StudentDB');
  var data=[{studID:110,studName:'Sandhya',studClass:'SY_Mcs',studYear:2021},{studID:213,studName:'Sandesh',studClass:'SY_MBA',studYear:2021},{studID:511,studName:'Saurabh',studClass:'TY_Bcom',studYear:2021},{studID:325,studName:'Ankita',studClass:'SY_Mcs',studYear:2021}];
  db.collection('Students').insertMany(data,function(err,res){
    if(err) throw err;
    console.log("Document Insert Successfully...!");
    console.log(res);
  });
  Client.close();
});