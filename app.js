'use strict'
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , less =require('less-middleware');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(less({ src : __dirname + '/public',dst : __dirname + '/public/lib/bootstrap/less'}));
  app.use(express.static(__dirname + '/public'));
  console.log("Your node.js details:")
  console.log("Version: " + process.version)
  console.log("Platform: " + process.platform)
  console.log("Architecture: " + process.arch)
  console.log("NODE_PATH: " + process.env.NODE_PATH)
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', routes.index);
app.get('/carousel', routes.carousel);
app.get('/simpleform', routes.simpleform);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
