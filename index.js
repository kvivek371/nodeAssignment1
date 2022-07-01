const http = require("http");

// const server = http.createServer(function(request,response){
//     response.write(
//         "<h1>First Server Assignment</h1>"
//     )
//     response.write(JSON.stringify({
//         name: "Aman",
//         address:"muzaffarpur"
//     }))
//     response.end();
// })

http.createServer(function(req,res){
    res.write("<h1>Node : Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.</h1>");
    const jsonData = {name:"vivek",age:"26",course:"EA10"};
    res.write(JSON.stringify(jsonData));
    res.end();
})

.listen(4000);
// server.listen(4000);
