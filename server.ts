// openssl s_client -connect 127.0.0.1:8000

import tls = require('tls');
import fs = require('fs');
import colors = require('colors');

let msg:string = "MSGDATA";

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

server.on("secureConnection", function(id: any, data: any) {
   console.log("secured connection"); 
   console.log("----------------------------------------------------------");
   console.log("----------------------------------------------------------");
});

server.on("data", function(data: any) {
   console.log("ONDATA");
   console.log(data);
});