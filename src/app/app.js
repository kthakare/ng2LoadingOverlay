/**
 * Module dependencies.
 */
var express = require('express');
var connect = require('connect');
var session = require('express-session');
var bodyParser = require('body-parser');
var login = require('./server/config/login');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var app = express();
var flash = require('connect-flash');
var http = require("http");
var path = require("path");
var fs = require("fs");
var engines = require('consolidate');
var cors = require('cors');

app.use(cors());
var port = process.env.PORT || 5000;

var serverUrl = "127.0.0.1";
// parse application/x-www-form-urlencoded
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// Configuration
require('./server/config/passport')(passport); // pass passport

app.use(connect.logger('dev'));
app.use(connect.json());
app.use(session(
    {
        secret: 'ssshhhhh',
        saveUninitialized: true,
        resave: true
    }
));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function (req, res, next) {
//res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    console.log("url:",req.url,"| logged in:",req.isAuthenticated());
    if (req.isAuthenticated()) {
        next();
    } else {
        if (req.url == '/login' || req.url.indexOf('/js/') == 0 || req.url.indexOf('/angular-ui-router/') == 0 || req.url.indexOf('/modules/') == 0||req.url=='/applogin') {
            next();
        } else {
            res.redirect('/login');
        }
    }
});

app.use(express.static('public'));
app.set('views', 'public');
app.engine('html', engines.mustache);
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


//app.use('http://10.0.2.2:8080/login');

//app.engine('html', require('ejs').renderFile);
// Routes

require('./server/routes/routes.js')(app, passport);

//var routes = require('./routes/routes.js');

//app.use('/', routes);

console.log('--->Root: ', __dirname);

/*app.get('/login', function(req, res){
 //res.render("login.ejs");
 //res.redirect('log.ejs');
 res.sendFile(path.join(__dirname + '/public/log.html'));
 console.log("Login...");
 });

 app.post('/applogin', function(req, res){
 //res.render("login.ejs");
 //res.send('You sent the  "' + req.query + '".');
 //routes.authenticate(req, res,function (found) {
 //    console.log(found);
 //    res.json(found);
 //});
 console.log("------ Post Login...",req.body);

 var email = req.body.email; //"abc@gmail.com";//
 var password = req.body.password; //"GIG123456$";//

 console.log("------ params...",email,password);

 var sess;

 login.login(email, password, function (found) {

 console.log(found);
 var pass = {
 pass:'Invalid Password',
 status:'false'
 };
 var email = {
 email:'Invalid Email',
 status:'false'
 };
 //Session set when user Request our app via URL
 if (found.res) {
 console.log("Redirect to admin : ");
 /!*
 * This line check Session existence.
 * If it existed will do some action.
 *!/
 //res.redirect('/admin');
 sess = req.body;
 console.log("admin Session : ",sess);
 if (sess.email) {
 req.session.cookie.maxAge=90 * 60000;
 //req.session.cookie.maxAge=60000;
 //res.redirect('/home');
 res.sendFile(path.join(__dirname + '/public/home.html'));
 //res.write(' < h1 > Hello'+sess.email+' </h1> ');
 //res.end('<a href="+">Logout</a>');
 } else {
 res.write('< h1 > Please login first. < / h1 > ');
 res.end('<a href="+">Login</a>');
 }
 }
 else {
 console.log("Redirect to login : ");

 if(found.response=="Invalid Password"){
 res.json(pass);
 }else{
 res.json(found);
 }
 res.sendFile(path.join(__dirname + '/public/log.html'));
 }
 });
 });

 app.get('/home', function (req, res) {
 console.log("home... ");
 //res.sendFile(path.join(__dirname + '/public/home.html'));
 res.sendFile('/home.html');
 });*/

app.listen(port);

console.log('The App runs on port ' + port);

