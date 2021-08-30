const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'EmployeeDB';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
   if (err) throw err;
   console.log("DataBase Connected!");
    client.close();
});
