const express = require('express')
const app = express()
const mongoose=require('mongoose')
const validator = require("email-validator");

app.use(express.json());

app.listen(3000,()=>{
    console.log('Server Listening at Port 3000')
})

//Creating User Route
const userRoute=express.Router();
app.use('/user',userRoute)//base route

userRoute.route('/')
    .get(getUser)
    .post(postUser)
    .patch(patchUser)
    .delete(deleteUser)

userRoute.route('/:id').get(getUserById)

async function getUser(req,res){
    let allUsers=await userModel.find();
    // let allUsers=await userModel.findOne({name:'King'});

    res.send({message:'List Of All Users', data:allUsers})
}
async function postUser(req,res){
    let datObj=req.body
    let newUser=userModel.create(datObj);
    let allUsers=await userModel.find();
    res.send({message:'List Of All Users After Insertion', data:allUsers})
}
async function patchUser(req,res) {
    //updating the users array
    let dataToBeUpdated = req.body;
    let updated=await  userModel.findOneAndUpdate({email:'King@gmail.com'},dataToBeUpdated)
    res.send({message:'Collection After Updation', data:updated})

}
async function deleteUser(req,res){
    let toDeleteUser=await userModel.findOneAndDelete({name:'Husko'});
    let allUsers=await userModel.find();
    res.send({message:'All Users after Deletion', data:allUsers})
}
async function getUserById(req,res){

    let id=req.params.id
    let requiredUser=await userModel.findById(id);
    res.send({message:'Required User', data:requiredUser})
}

//connecting with mongoodb
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
        unique:true,
        validate:function (){
            return validator.validate(this.email)
        }
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
        min:8,
        validate:function (){
            return this.password===this.confirm_password;
        }
    }
})

//pre hook(available for both  events 'save' ad 'remove'
// userSchema.pre('save',()=>{
//     console.log('PRE',this)//in post object created before inserting can be accessed via 'this'
// })
// userSchema.post('save',(doc)=>{
//     console.log('POST',doc)
// })
userSchema.pre('save',()=>this.confirm_password=undefined)

//model
const userModel=mongoose.model('userModel',userSchema)

/*

{
    "name": "Husko",
    "email": "Husko@gmail.com",
    "password": "Ice-hockey",
    "confirm_password": "Ice-hockey"
}
*/
