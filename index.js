var http = require('http');
var url = require('url');
const MongoClient = require('mongodb').MongoClient;
const link = process.env.MONGODB_URI;
//       'mongodb+srv://carysklt:carysklt123@cluster0.nipyz.mongodb.net/StockTicker?retryWrites=true&w=majority';

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  //take query string from html form and parse it
  
  var q = url.parse(req.url, true).query;
  var whichOne = q.choice;
  var what = q.querystring;
  var thing = "hello";
  
   MongoClient.connect(link, function(err,db){
  //indicate database and collection
     var dbo = db.db('StockTicker');
     var collection = dbo.collection('companies');
     collection.findOne({"Company": q.querystring},function(err,result){
      var answer = result.Ticker;
     });
  });
  
  thing = answer;
   if(q.choice === "companyName"){
//      collection.findOne({"Company": q.querystring},function(err,result){
       res.end("The stock ticker for " + q.querystring + " is " + thing);
//      });
    } else {
//       collection.find({"Ticker": q.querystring});
      res.end("The company/ies that have the stock ticker " + q.querystring + " is/are ");
    }
//     db.close();
//   });
}).listen(process.env.PORT||8080);

