// openssl s_client -connect 127.0.0.1:8000

var tls = require('tls'),
    fs = require('fs'),
    colors = require('colors'),
    msg = "MSGDATA"

var options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem')
};

tls.createServer(options, function (s) {
  s.write(msg+"\n");
  s.pipe(s);
}).listen(8000);

// var tls = require('tls');
// var fs = require('fs');

// var options = {
//   key: fs.readFileSync('server-key.pem'),
//   cert: fs.readFileSync('server-cert.pem'),

//   // This is necessary only if using the client certificate authentication.
//   requestCert: true,

//   // This is necessary only if the client uses the self-signed certificate.
//   ca: [ fs.readFileSync('client-cert.pem') ]
// };

// var server = tls.createServer(options, function(socket) {
//   console.log('server connected',
//               socket.authorized ? 'authorized' : 'unauthorized');
//   socket.write("welcome!\n");
//   socket.setEncoding('utf8');
//   socket.pipe(socket);
// });
// server.listen(8000, function() {
//   console.log('server bound');
// });


// var tls = require('tls');
// var fs = require('fs');

// var options = {
//   pfx: fs.readFileSync('server.pfx'),

//   // This is necessary only if using the client certificate authentication.
//   requestCert: true,

// };

// var server = tls.createServer(options, function(socket) {
//   console.log('server connected',
//               socket.authorized ? 'authorized' : 'unauthorized');
//   socket.write("welcome!\n");
//   socket.setEncoding('utf8');
//   socket.pipe(socket);
// });
// server.listen(8000, function() {
//   console.log('server bound');
// });