const express = require('express')
const app = express()
const mongoose=require('mongoose')
app.use(express.json());

app.listen(3000,()=>console.log('Server is listening on port 3000')
)

//middlewfare function in post request, data from front->json

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


const db_link='mongodb+srv://PriyankaKalra:7ZQVzqqYr7xfJaa@cluster1.vh5jcow.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_link)
.then((db)=>{
    console.log('Db Connected')
})
.catch((err)=> console.log(err) )

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
    ,
    password:{
        type:String,
        required:true,
        minLength:8
    },
    confirm_password:{
        type:String,
        required:true,
        min:8
    }
})

//model
const userModel=mongoose.model('userModel',userSchema)

async function createUser(){
    let user={
        name:'Sammy',
        email:'SammyKing@gmail.com',
        password:'Ice-hockey',
        confirm_password:'Ice-hockey'
    }

    let data=await userModel.create(user)
    console.log(data);
};
createUser();