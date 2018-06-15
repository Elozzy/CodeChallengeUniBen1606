var https = require('https');
var port = process.env.PORT || 8080;
var app = require('./app');
var server = https.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write(app);
    res.end();
});

server.listen(port, function(){
    console.log('Server is running ar %s:%s',
        server.address().address, server.address().port
);
});
