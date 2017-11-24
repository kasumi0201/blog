var express = require('express'),
  app = express(),
  post = require('./routes/post');

var bodyParser = require('body-parser');
var connect = require('connect');
var methodOverride = require('method-override');
//ここにも！

app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
//putとdeleteのmethodを使えるようにする為。上のとこれを書くだけでok!

//routing
app.get('/',post.index);
app.get('/posts/new',post.new);
app.get('/posts/:id([0-9]+)',post.show);
app.post('/posts/create',post.create);
app.get('/posts/:id/edit',post.edit);
app.put('/posts/:id',post.update);
// app.delete('/posts/:id',post.destroy);

app.listen(3000);
console.log("server starting...");
