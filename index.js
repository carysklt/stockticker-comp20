var http = require('http');
var url = require('url');
// const fs = require('fs');
// const MongoClient = require('mongodb').MongoClient;
// const link = "mongodb+srv://carysklt:carysklt123@cluster0.nipyz.mongodb.net/?retryWrites=true&w=majority";

http.createServer(function (req, res) {
  console.log("hello world");
//   MongoClient.connect(link, function(err, db) {
//     if(err) { throw err; }
  
//     //take querystring from html form and parse it
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var q = url.parse(req.url, true).query;
//     var whichOne = q.choice;
//     var what = q.querystring;
    
//     //indicate database and collection
//     var dbo = db.db("StockTicker");
//     var collection = dbo.collection('companies');
//     if(q.choice === "companyName"){
//       var result = collection.find({"Company": q.querystring});
//       console.log(result.Company);
//     } else {
//       collection.find({"Ticker": q.querystring});
//     }
  
//   //check whether it is company or ticker
//   //take the info and search for it
  
//     res.end("The value is: " + what);

//     db.close();
//   });
}).listen(process.env.PORT||3000);
