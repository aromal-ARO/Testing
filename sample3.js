var http = require('http')
var fs = require('fs')
var url  = require('url')
http.createServer(function server(req,res){
    var q = url.parse(req.url)
    if(q.pathname==='/'){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })}
    else if(q.pathname==='/login'){
        res.write('Welcome to the login system')
        res.end()
    }
    else if(q.pathname==='/signup'){
        fs.readFile('signup.html',function(err,data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(q.pathname==='/signupaction'){
        
        res.write('error')
    }
   
}).listen(8000,()=>console.log('server started'))