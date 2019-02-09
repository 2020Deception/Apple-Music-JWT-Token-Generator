var jwt = require('jsonwebtoken');
var express = require('express')
var app = express()

app.get('/', function (req, res) {
      var cert = `-----BEGIN PRIVATE KEY-----
ENTER_YOUR_CERTIFICATE_HERE
-----END PRIVATE KEY-----`;
  var token = jwt.sign({
      iss: 'YOUR_TEAM_ID_GOES_HERE',
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60),
      iat: Math.floor(Date.now() / 1000)
    }, cert, {
      algorithm: 'ES256',
      keyid: 'YOUR_KEY_ID_GOES_HERE'
    }, function(err, token) {
      console.log(err, token);
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(token);
      }
  });
})

app.listen(3000)
