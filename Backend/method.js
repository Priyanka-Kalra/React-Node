const express = require('express')
const app = express()
app.use(express.json());

app.listen(3000,()=>console.log('Server is listening on port 3000')
)

//middleware function in post request, data from front->json

let users=[
    {
        id:1,
        name:'Abhishek'
    },
    {
        id:2,
        name:'Priyanka'
    },
    {
        id:3,
        name:'Woomsie'
    }
]

/*
app.get('/user',(req,res)=>{
    res.send(users);

    //queries
    console.log(req.query);
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    res.json({
        message:"Data Received Successfully",
        user:req.body
    })
})

app.patch('/user',(req,res)=>{
    console.log(req.body);

    //updating the users array
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated)users[key]=dataToBeUpdated[key];

    res.json({
        message:"Data Updated Successfully",
        user:users
    })
})
app.delete('/user',(req,res)=>{
    users={}
    res.json({
        message:"Data Deleted Successfully",
    })
})

params
app.get('/user/:username',(req,res)=>{
    console.log(req.params.username)
    console.log(req.params)
    res.send("User id Received")
})
*/

// mounting/mini app for a particular route
//user page
const userRoute=express.Router();
app.use('/user',userRoute)//base route

userRoute.route('/')
    .get(getUser)
    .post(postUser)
    .patch(patchUser)
    .delete(deleteUser)

userRoute.route('/:id')
    .get(getUserById)

function getUser(req,res){
    res.send(users);

    //queries
    console.log(req.query);
}
function postUser(req,res){
    console.log(req.body);
    res.json({
        message:"Data Received Successfully",
        user:req.body
    })
}
function patchUser(req,res) {
    console.log(req.body);

    //updating the users array
    let dataToBeUpdated = req.body;
    for (let key in dataToBeUpdated){
        users[key] = dataToBeUpdated[key];
    }

    res.json({
        message: "Data Updated Successfully",
        user: users
    })
}
function deleteUser(req,res){
    users={}
    res.json({
        message:"Data Deleted Successfully",
    })
}
function getUserById(req,res){
    console.log(req.params.id)
    console.log(req.params)
    res.send("User id Received")
}


