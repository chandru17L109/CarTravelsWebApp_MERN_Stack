const CarTourBookedUsersData = require('../model/TourBooking.js')
const asyncHandler = require('../middleware/asyncHandler.js');

const insertuser = asyncHandler(async(req,res,next) => {
    let caruser_postdata = await CarTourBookedUsersData.create(req.body);
    console.log(caruser_postdata);
    res.status(201).json({success: "Added Sucessfully"})
})

const findAllusers = asyncHandler(async(req,res, next) => {
    let Car_datas =await CarTourBookedUsersData.find();
    res.json(Car_datas);
    console.log(Car_datas);
})

// const findAllusers = asyncHandler(async(req, res)=>{
//     res.status(200).json(res.advancedResults);
// })

const findOneUser = asyncHandler(async(req,res,next)=>{
    var params_data = req.params.user
    if(params_data[0] >= 0 && params_data[0] <= 9){
        let Car_data=await CarTourBookedUsersData.find({user:params_data});
        if(Car_data.length !=0){
            res.json(Car_data);
            console.log(Car_data);}
        else throw new Error(`No record found for ${req.params.user}`)
    }else{
        let Car_data=await CarTourBookedUsersData.find({usernameid:params_data});
        if(Car_data.length !=0){
            res.json(Car_data);
            console.log(Car_data);}
        else throw new Error(`No record found for ${req.params.usernameid}`)
    }
})

const deleteuser = asyncHandler(async (req,res,next)=>{
    let Car_data=await CarTourBookedUsersData.deleteOne({_id:req.params._id});
    if(Car_data.n !== 0){
          res.status(201).json({success: "Sucessfully Deleted"})}
    else throw new Error(`No record found for ${req.params._id}`)
})

// const updateuser = asyncHandler(async(req,res,next) => {
//     CarTourBookedUsersData.findOneAndUpdate({packagename: req.params.packagename}, { $set : {"phoneNumber" :  req.body.phoneNumber, "FromLocation" : req.body.FromLocation, "ToLocation": req.body.ToLocation} }, (err, doc)=>{
//     res.json({success:"Update Successfull"});
//     })
// })


module.exports = {insertuser,findAllusers,findOneUser,deleteuser};