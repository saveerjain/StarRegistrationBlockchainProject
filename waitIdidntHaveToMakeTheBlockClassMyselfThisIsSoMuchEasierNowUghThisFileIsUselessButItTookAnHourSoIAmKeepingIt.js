const SHA256 = require("crypto-js/sha256");
const h2a = require('hex2ascii')

class Block {
  constructor(data){
    this.height = 1;
    this.timeStamp = '';
    this.data = data;
    this.previousHash = '0x';
    this.hash = '';
  }

  validate(){
    let self = this; 
    var promise = new Promise(function(resolve,reject){
      if(self.hash == SHA256(self).toString()){
        resolve(true);
      }else{
        resolve(false);
      }
    });
    promise.then(function(result){
      console.log(result);
    },function(err){
      console.log(err);
    });
  }

  getBData(){
    let self = this; 
    var promise2 = new Promise(function(resolve,reject){
      if(self.height>0){
        resolve(JSON.parse(h2a(self.data)).toString());
      }else{
        resolve('OOF');
      }
    });
    promise2.then(function(result){
      console.log(result);
    },function(err){
      console.log(err);
    });
    return promise2; 
  }


}