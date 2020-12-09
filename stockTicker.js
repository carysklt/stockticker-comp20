const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://carysklt:carysklt123@cluster0.nipyz.mongodb.net/?retryWrites=true&w=majority";

function main(){
  MongoClient.connect(url, function(err, db) {
    if(err) { return console.log(err); }
  
    //indicate database and collection
    var dbo = db.db("StockTicker");
    var collection = dbo.collection('companies');

    //parse csv file and insert data into database
    fs.readFile('./companies-1.csv', function(err, data){
      if (err) throw err;
      
      //parse companies and tickers data, taking the first row as headers
      var bufferString = data.toString();
      var arr = bufferString.split('\n');
      var jsonObject = [];
      var headers = arr[0].split(',');
      for (var i = 1; i<arr.length; i++){
        var data = arr[i].split(',');
        var object = {};
        for (var j = 0;j<data.length; j++){
          object[headers[j].trim()] = data[j].trim();
        }
        jsonObject.push(object);
      }

      //insert array of companies and tickers into database
      collection.insertMany(jsonObject, function(err, res){
        if (err) {return console.log(err);};
        console.log("new data inserted");
      });
    });
  
});
}

main();