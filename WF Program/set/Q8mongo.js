var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryDB');
var dataBase= mongoose.connection;
dataBase.on('error',console.error.bind(console,'connection error'));
dataBase.once('open',function(){
    console.log("connection Successfull...!!!!");
});

var labSchema=mongoose.Schema({
    labNo:Number,
    labName:String,
    place:String
});
var library=mongoose.model('library',labSchema,'library');
var labFirst=new library({labNo:'109',labName:'Chemical-Lab',place:'Pune-Chinchwad'});

labFirst.save(function (err,library){
    if(err) return console.error(err);
    console.log(library.labName +' '+ 'is saved in Library Management System...!');
})