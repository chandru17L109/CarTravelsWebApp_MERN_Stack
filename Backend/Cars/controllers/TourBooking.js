const CarTourBookedUsersData = require('../model/TourBooking')
const asyncHandler = require('../middleware/asyncHandler');

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
    let Car_data=await CarTourBookedUsersData.find({user:req.params.user});
    if(Car_data.length !=0){
        res.json(Car_data);
        console.log(Car_data);}
    else throw new Error(`No record found for ${req.params.user}`)
})

const deleteuser = asyncHandler(async (req,res,next)=>{
    let Car_data=await CarTourBookedUsersData.deleteOne({packagename:req.params._id});
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