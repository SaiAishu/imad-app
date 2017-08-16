var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one' :{
         'title'  : "Article One | Aishu",
         'content': ` <p>
First Article...hope things are good!!
First Article...hope things are good!!
</p>
<p>
First Article...hope things are good!!
First Article...hope things are good!!
</p><p>
First Article...hope things are good!!
First Article...hope things are good!!
</p><p>
First Article...hope things are good!!
First Article...hope things are good!!
</p><p>
First Article...hope things are good!!
First Article...hope things are good!!
</p><p>First Article...hope things are good!!
First Article...hope things are good!!
First Article...hope things are good!!
</p>`
    },
     'article-2' :{
         'title':"Article Two | Aishu",
         content : "Second Article...blah blah blah!!"
     },
    'article-3' :{
        title:"Article Three | Aishu",
        content:"Three Article...Viva la Pluto!!"
    }
};

function template(data){
 
 var titlehere=data.title;
 var contenthere=data.content;
 
 var result= `<html>
<title>${titlehere}</title>
<meta name="viewport" content="width=device-width , initial-scale=1"/>
<link href="ui/style.css" rel="stylesheet"/> 
<body>
<div class="one">
<a hrtef="/">Home</a>
<hr>
<p>${contenthere}</p></div>
</body>
</html>`
return result;

}
var counter=0;

app.get('/counter', function (req, res) {
counter+=1;
  res.send(counter.toString());
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function(req,res){
    var articlename=req.params.articlename;
    res.send(template(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
