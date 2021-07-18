const CarLocalBookedUsersData = require('../model/Localbooking.js')
const asyncHandler = require('../middleware/asyncHandler.js');

const insertuser = asyncHandler(async(req,res,next) => {
    let caruser_postdata = await CarLocalBookedUsersData.create(req.body);
    console.log(caruser_postdata);
    res.status(201).json({success: "Added Sucessfully"})
})

// const findAllusers = asyncHandler(async(req, res)=>{
//     res.status(200).json(res.advancedResults);
// })

const findAllusers = asyncHandler(async(req,res, next) => {
    let Car_datas =await CarLocalBookedUsersData.find();
    res.json(Car_datas);
    console.log(Car_datas);
})

const findOneUser = asyncHandler(async(req,res,next)=>{
    var params_data = req.params.user
    if(params_data[0] >= 0 && params_data[0] <= 9){
        let Car_data=await CarLocalBookedUsersData.find({user:params_data});
        if(Car_data.length !=0){
            res.json(Car_data);
            console.log(Car_data);}
        else throw new Error(`No record found for ${req.params.user}`)
    }else{
        let Car_data=await CarLocalBookedUsersData.find({usernameid:params_data});
        if(Car_data.length !=0){
            res.json(Car_data);
            console.log(Car_data);}
        else throw new Error(`No record found for ${req.params.usernameid}`)
    }
})

const deleteuser = asyncHandler(async (req,res,next)=>{
    console.log("del user basedon Id",req.params._id)
    let Car_data=await CarLocalBookedUsersData.deleteOne({_id:req.params._id});
    if(Car_data.n !== 0){
          res.status(201).json({success: "Sucessfully Deleted"})}
    else throw new Error(`No record found for ${req.params.id}`)
})

const updateuser = asyncHandler(async(req,res,next) => {
    CarLocalBookedUsersData.findOneAndUpdate({user:req.params.user}, { $set : {"phoneNumber" :  req.body.phoneNumber, "FromLocation" : req.body.FromLocation, "ToLocation": req.body.ToLocation} }, (err, doc)=>{
    res.json({success:"Update Successfull"});
    })
})


module.exports = {insertuser,findAllusers,findOneUser,deleteuser,updateuser};

/*
const findAllusers = async(req,res, next) => {
    try{
        let Car_datas =await CarLocalBookedUsersData.find();
        res.json(Car_datas);
        console.log(Car_datas);}
    catch(err) {next(err);}
}
--------------------------------------------------------------------------------------
const insertuser = (req,res,next) => {
    caruserRepo.insertuser(req.body,(err) =>{
        if(err) next(err)
        else {res.status(201).json({success: true})}
    })
}
const findOneUser = asyncHandler(async(req,res,next)=>{
    let Car_data=await CarLocalBookedUsersData.find({user:req.params.user});
    if(Car_data.length !=0){
        res.json(Car_data);
        console.log(Car_data);}
    else throw new Error(`No record found for ${req.params.user}`)
})
const updateuser = (req,res,next) => {
    caruserRepo.updateuser(req.body,(err) =>{
        if(err) next(err)
        else {res.status(201).json({success: "Update Succssfull true"})}
    })
}
const deleteuser = (req,res,next) =>{
    caruserRepo.deleteuser(req.params.name, (err)=>{
        if(err) next(err)
        else {res.status(201).json({success: true})}
    })
}
const findOneUser = (req,res)=>{
    caruserRepo.findOneUser(req.params.name, (data)=>{
        console.log(data[0]);
        res.json(data[0])
    })
}*/
//module.exports = {findAllusers,insertuser,updateuser,deleteuser,findOneUser};

/*const findAllusers = (req,res) =>{
    caruserRepo.findAllusers((data)=>{
        res.json(data)
    })
}*/

/*router.post("/", (req,res)=>{
    let user = req.body
    caruserRepo.insertuser(user, function(){
        res.status(201).json({success: true})
    })
})*/

/*router.patch("/", (req,res)=>{
    let user = req.body
    caruserRepo.updateuser(user, ()=>{
        res.json({success: true})
    })
})*/
