//returns data in JSON format
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function (req, res){

    res.send('Connected!');
})



//got help from the FSF - Unit 13 (Express) video by Lisa Battle
app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted: \n')
    res.end(JSON.stringify(req.body, null, 2))
})

//moving this to the bottom
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});