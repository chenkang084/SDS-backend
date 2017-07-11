var express = require('express'),
    path = require('path'),
    consolidate = require('consolidate');

var isDev = process.env.NODE_ENV !== 'production';
var app = express();
var port = 4000;

app.engine('html', consolidate.ejs);
// app.set('view engine', 'html');
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './server/views'));

// local variables for all views
app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;

app.use(express.static(path.join(__dirname, 'public')));
require('./server/routes')(app);
app.listen(port, function () {
    console.log('App (production) is now running on port 4000!');
});