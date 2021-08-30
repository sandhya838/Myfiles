var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
var dbName="CustomerDB";
MongoClient.connect(url,function(err,Client){
    if(err) throw err;
    var db=Client.db('CustomerDB');

    var data=[{CstID:110,cstName:'Sandhya',cstOrder:'Package100'},{CstID:213,cstName:'Sandesh',cstOrder:'Package200'},{CstID:511,cstName:'Saurabh',cstOrder:'Package50'},{CstID:325,cstName:'Ankita',cstOrder:'Package600'}];
  db.collection('Customers').insertMany(data,function(err,res){
    if(err) throw err;
    console.log("Document Insert Successfully...!");
    console.log(res);
});
    var db=db.collection('Customers').find({}).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        console.log("Document Inserted Successfully...!");
        Client.close();
    
});
});
//Find() method ne result return hoto n array() ne to data Array madhe convert hoto