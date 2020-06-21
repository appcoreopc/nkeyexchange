// export NODE_TLS_REJECT_UNAUTHORIZED=0

import tls = require('tls');
import fs = require('fs');

var options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem')
};

var conn = tls.connect(8000, options, function () {

  //console.log(conn);
  if (conn.authorized) {
    console.log("Connection authorized by a Certificate Authority.");
  } else {
    console.log("Connection not authorized: " + conn.authorizationError)
  }
  console.log();
});

conn.on("data", function (data) {

  console.log("On secure connection");

});


conn.on("data", function (data) {

  if (data == "MSGDATA") {
    /// set env key // 

    console.log("Sending data");

    conn.write("OK-LETS-GO");
  }
  console.log(data.toString());
  conn.end();
});

