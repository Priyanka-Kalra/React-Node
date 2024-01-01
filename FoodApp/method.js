const express = require('express')
const app = express()
app.use(express.json());

app.listen(3000,()=>console.log('Server is listening on port 3000')
)

//middleware function in post request, data from front->json

//auth/signup page
const authRoute=express.Router();
app.use('/auth',authRoute)//base route

authRoute.route('/signup')
    .get(getAuth)
    .post(postAuth)


function getAuth(req,res){
    res.sendFile('public/signup.html',{root:__dirname})
}
function postAuth(req,res){
    let obj=req.body;
    console.log('backend ',obj)
    res.send({
        message:'User Signed Up',
        data:obj
    });

}
