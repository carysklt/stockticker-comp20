var http = require('http');
var url = require('url');
const MongoClient = require('mongodb').MongoClient;
const link = "mongodb+srv://carysklt:carysklt123@cluster0.nipyz.mongodb.net/?retryWrites=true&w=majority";

http.createServer(function (req, res) {
  MongoClient.connect(link, function(err,db){
  //indicate database and collection
     var dbo = db.db('StockTicker');
     var collection = dbo.collection('companies');
   });
    
  res.writeHead(200, {'Content-Type': 'text/html'});
  //take query string from html form and parse it
  
  var q = url.parse(req.url, true).query;
  var whichOne = q.choice;
  var what = q.querystring;
  
   if(q.choice === "companyName"){
//       var result = collection.find({"Company": q.querystring});
      console.log("Company");
    } else {
//       collection.find({"Ticker": q.querystring});
        console.log("Ticker");
    }
    
  res.end(
    if (q.choice === "companyName") {
    "The company you searched has the following stock ticker:";
  }
//     "The value is: " + whichOne + what
  );
  //db.close();
}).listen(process.env.PORT||8080);

