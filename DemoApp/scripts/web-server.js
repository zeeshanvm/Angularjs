var express = require('express'),
    path=  require('path'),
    app = express(),
    rootpath = path.normalize(__dirname + '/../');

app.use(express.static(rootpath + '/app'))
app.listen(8000);
console.log('Server is Up ...');