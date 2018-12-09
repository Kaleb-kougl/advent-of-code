const fs = require('fs');

var dataArr;
fs.readFile('data.txt', "utf8", function(error, data){
  if (error) {
    return console.log(error);
  }
  dataArr = data.split('\n');
  console.log(dataArr.reduce(function(acc, cur){
    return +(acc) + +(cur);
  }));
});
