let express = require('express');
let app = express();
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    res.render('index',);
});
app.get('/index', function (req, res) {
    res.render('index',);
});
app.post('/index',urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    res.render('index-succes', {data:req.body});
});


app.get('/page1', function (req, res) {
    let obj = {testArray:[1,2,3,4,5,6,7,8,9]};
    res.render('page1', {page1Id: req.params, obj});
});
app.get('/page2', function (req, res) {
    let obj = {testArray:[1,2,3,4,5,6,7,8,9]};
    res.render('page2', {page1Id: req.params, obj});
});


app.listen(3000);
