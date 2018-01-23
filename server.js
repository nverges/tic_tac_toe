const express = require('express');
const app = express();
var path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname + './index.html'));
});

app.listen(PORT, function() {
    console.log('App Listening on PORT: ' + PORT);
});
