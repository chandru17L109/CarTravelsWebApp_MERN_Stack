const CarBookedUsersData = require('../model/LocalBooking')
const asyncHandler = require('../middleware/asyncHandler');

const insertuser = asyncHandler(async(req,res,next) => {
    let caruser_postdata = await CarBookedUsersData.create(req.body);
    console.log(caruser_postdata);
    res.status(201).json({success: "Added Sucessfully"})
})

const findAllusers = asyncHandler(async(req,res, next) => {
    let Car_datas =await CarBookedUsersData.find();
    res.json(Car_datas);
    console.log(Car_datas);
})

const findOneUser = asyncHandler(async(req,res,next)=>{
    let Car_data=await CarBookedUsersData.find({user:req.params.user});
    if(Car_data.length !=0){
        res.json(Car_data);
        console.log(Car_data);}
    else throw new Error(`No record found for ${req.params.user}`)
})

const deleteuser = asyncHandler(async (req,res,next)=>{
    console.log("del user basedon Id",req.params._id)
    let Car_data=await CarBookedUsersData.deleteOne({_id:req.params._id});
    if(Car_data.n !== 0){
          res.status(201).json({success: "Sucessfully Deleted"})}
    else throw new Error(`No record found for ${req.params.id}`)
})

const updateuser = asyncHandler(async(req,res,next) => {
    CarBookedUsersData.findOneAndUpdate({user:req.params.user}, { $set : {"phoneNumber" :  req.body.phoneNumber, "FromLocation" : req.body.FromLocation, "ToLocation": req.body.ToLocation} }, (err, doc)=>{
    res.json({success:"Update Successfull"});
    })
})


module.exports = {insertuser,findAllusers,findOneUser,deleteuser,updateuser};

/*
const findAllusers = async(req,res, next) => {
    try{
        let Car_datas =await CarBookedUsersData.find();
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
