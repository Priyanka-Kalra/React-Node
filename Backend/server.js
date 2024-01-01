//server creation
//status codes-used for debug
//status code is send in res header,depicting what happened for the req made like sucessful,failed/etc


//1. http module
const http=require('http');
const fs = require('fs');
const _=require('lodash')


const server=http.createServer((req,res)=>{
    console.log('Request has been made from browser to server')
    // console.log(req.method)
    // console.log(req.url)

    res.setHeader('Content-Type','text/html');
    // res.write('<h1 >Hello King</h1>');
    // res .end();

    let path='./Views';
    switch (req.url){
        case '/':
            path+='/index.html'
            res.statusCode=200;
            break;
        case '/about':
            path+='/about.html'
            res.statusCode=200;
            break;
        case '/about-me':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end()
            break;
        default:
            path+='/404.html'
            res.statusCode=404;
    };

    //lodash
    console.log(_.random(0,20))

    let greet=_.once(()=>console.log('Hello'))//done only one
    greet();
    greet();

    fs.readFile(path,(err,data)=>{
        if(err) console.log(err);
        else{
            res.write(data);
            res.end();//res.end(data)
        }
    })

})

//portnumber,host,callback func
server.listen(3000,'localhost',()=>{
    console.log('Server is listening on port 3000')
})
//loopback ip adress
/*
1.
500 status codes split into 5 categories
100-199:informational purposes
200-299:sucess purposes
300-399:redirect purposes
400-499:client side error
500-599:server side error

600>= SELF MADE


2. SEO/Search Engine Optimisation
 */