var email = require('./EmailExtractor');
//console.log(email);

var mail = email.runExtractor('lbelf@bloomberg.net');
console.log(mail);

