// ya code sathi adhi two txt file tayar karayachya .. first file madhe kahi tari content takayacha ... second file append keli ki 1st madala content sec file madhe jato 

var fs=require('fs');
console.log("This Content is Before Appending File..!");

var test=fs.readFileSync('first.txt','utf-8');
console.log(test);

fs.readFileSync('second.txt','utf-8');
fs.appendFile('second.txt',test,(err)=>{
    if(err){
        console.log("Error Occure");
    }
    else{
        console.log("This Content is After Appending File");
        console.log(fs.readFileSync('second.txt','utf-8'));
    }
})

//fs=file system .. ya mule sarv synchronus n asynchro file vr operation rta yetat