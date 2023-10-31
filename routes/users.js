const express = require('express');
const Users = require('../models/Users');
const router = express.Router();

const mockData= [{
    id:'asd',
    name:'kashif'
},{
    id:'poi',
    name:"aliajaz"
}]
// ->  users/all
router.get('/all', async (req,res)=>{
    const users = await Users.find({})
    res.send(users);

})

router.get('/firstUser',(req,res)=>{
    res.send(mockData[0])
});

router.post('/add', async (req,res)=>{
    console.log('req',req.body);

    try{
        const user = new Users(req.body)
        await user.save();
        res.send({message: "data added successfully ",data:req.body})
    }
    catch(e){
        res.send({message:e })
    }

    // mockData.push(req.body)
    // res.send({message:"data added successfully",data:mockData})
});

router.delete('/delete/:id',async (req,res)=>{
    console.log('id', req.params.id);
    await Users.findByIdAndDelete(req.params.id);
    res.send({ message: 'data deleted' });
})

router.put('/update/:id',async (req,res)=>{
    console.log(req.params.id)
    await Users.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: 'data updated success' });
    console.log("Data updated!");
})




module.exports = router