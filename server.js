process.env.NODE_ENV = 'production';
var history = require('connect-history-api-fallback');
var express = require('express');
var app = express();
app.use(history({ htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] }));
app.use(express.static(__dirname)); 
app.listen(3000);
console.log('App listening on port 3000');