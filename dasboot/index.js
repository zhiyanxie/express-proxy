var express = require('express')
var app = express()
var httpProxy = require('http-proxy');

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
	
// app.use('/api/v1/', proxy('http://localhost:8181/api/v1/'));


var apiProxy = httpProxy.createProxyServer();

app.get("/api/*", function(req, res){ 
  apiProxy.web(req, res, { target: 'http://localhost:8181' });
});

app.delete("/api/*", function(req, res){ 
  apiProxy.web(req, res, { target: 'http://localhost:8181' });
});