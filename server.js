
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

//got help from the FSF - Unit 13 (Express) video by Lisa Battle
app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

//require html files and pass in express
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

//moving this to the bottom
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});