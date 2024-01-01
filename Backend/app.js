const express=require('express')
const app=express()


app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
});


app.get('/',(req, res)=>{
    res.sendFile('./Views/index.html',{root:__dirname})
    // res.sendFile('/Users/priyanka/DEV/Backend/Views/index.html')
})
app.get('/about',(req, res)=>{
    res.sendFile('./Views/about.html',{root:__dirname})
    // res.sendFile('/Users/priyanka/DEV/Backend/Views/about.html')
})

//redirects
app.get('/about-me',(req,res)=>{
    res.redirect('/about')
})

//404 page
app.use((req,res)=>{
    res.status(404).sendFile('./Views/404.html',{root:__dirname})

})