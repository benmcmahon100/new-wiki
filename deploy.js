var cp = require('child_process');

cp.exec("rm -r -f ./wiki", function(err){
  if(!err) {
    cp.exec("git clone https://github.com/FreeCodeCamp/wiki.git", function(err){
      if(!err) {
        require("./app");
      }
      else {
        console.error(err);
      }
    });
  }
  else {
    console.error(err);
  }
});