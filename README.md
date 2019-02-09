# Apple-Music-JWT-Token-Generator


Simple JWT Token Generator using express. Just add your certificate information, key id and team id, start the server and play cool music.

Here is the very complex code required to make the magic happen :

```javascript
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
```

# Instructions

Open Terminal, cd into the directory type 
```bash
node index.js
```
Test getting a token by opening another tab in Terminal and typing 
```bash
curl http://localhost:3000
```

# Notes

You must mave node and npm to use this. <https://www.npmjs.com> is a good starting point if you need more information.
