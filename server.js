// openssl s_client -connect 127.0.0.1:8000

var tls = require('tls'),
    fs = require('fs'),
    colors = require('colors'),
    msg = "MSGDATA";

var options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem')
};

var server = tls.createServer(options, function (socket) {
  
  socket.on("data", function(data){
     console.log(data);
  });

  socket.on('end', function() {
    console.log('EOT (End Of Transmission)'); 
  });

  socket.write(msg);
  socket.pipe(socket);
});

server.listen(8000);

server.on("secureConnection", function(id, data) {
   console.log("secured connection"); 
   //console.log(id);
   console.log("----------------------------------------------------------");
   //console.log(data);
   console.log("----------------------------------------------------------");
});

server.on("data", function(data) {
   console.log("ONDATA");
   console.log(data);
});