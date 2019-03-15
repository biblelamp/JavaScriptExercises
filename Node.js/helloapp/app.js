const http = require("http");
http.createServer(function(request,response){

    response.end("Hello Node.js!");

}).listen(8080, "127.0.0.1",function(){
    console.log("Server has started listening on port requests 8080");
});