

var express = require('express');
var app = express();
var server = require('http').Server(app);

const dbc = require('./server/dbc');
const crypto = require('crypto');

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/maintain/index.html');
});

app.use(express.static(__dirname + "/maintain"));


app.get('*', function(req, res){
  res.status(404).sendFile(__dirname+'/intercept/index.html');
});

server.listen(8080);

function hash(string) {
  const hash = crypto.createHash('sha256');
  hash.update(string);
  return hash.digest('hex');
}

var io = require('socket.io')(server);
io.sockets.on('connection', function(socket){
  
  socket.on('serverUsernameCompare', function(email, username, rpwd) {
    donehash = hash(rpwd)
    var trres
    var brres
    dbc.chkUsername(username)
  .then(result => {
    trres = result

    dbc.chkEmail(email, username)
  .then(result => {
    brres = result

    socket.emit("serverUsernameCompareResult", brres, trres, donehash);
  })
  .catch(error => {
    console.log(error);
    // Handle the error
  });
   
  })
  .catch(error => {
    console.log(error);
    // Handle the error
  });
   
  });

  socket.on('vhashCheck', function(providedHash) {
    var allowed
    dbc.chkVerifyHash(providedHash)
  .then(result => {
    allowed = result;
    socket.emit("vhashCheckResult", allowed);
  })
  .catch(error => {
    console.log(error);
    // Handle the error
  });
   
  });

  socket.on("createUserAccount", (ema, use, pas) => {
  dbc.registerUser(ema,use,pas);
   // console.log("INTC")
 //http.get('*',function(req,res){  
   // res.sendFile(__dirname + '/public/login/verify/index.html');
   
  //res.redirect('/?k=' + gets[1]);
//});
  
})

});
  

//dbc.registerUser("Aries","lololol")

//dbc.chkUsername("asd")


