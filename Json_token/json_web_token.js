var nJwt = require('njwt');

var claims = {
 "sub": "0984999321",
 "name": "shivi chohan",
 "admin": true,
 "jti": "a0f65b60-19ec-42aa-b3fd-01f8f50560af",
 "iat": 1573281829,
 "exp": 1573285429
}

var jwt = nJwt.create(claims,"secret","HS256");
var token = jwt.compact();
console.log(token)

