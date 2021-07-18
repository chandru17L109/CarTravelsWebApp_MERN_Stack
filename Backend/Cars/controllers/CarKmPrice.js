const CarKmPriceData = require('../model/CarKmPrice.js')
const asyncHandler = require('../middleware/asyncHandler.js');

const insertdetail = asyncHandler(async(req,res,next) => {
    let cardetail_postdata = await CarKmPriceData.create(req.body);
    console.log(cardetail_postdata);
    res.status(201).json({success: "Added Sucessfully"})
})

const findAlldetails = asyncHandler(async(req,res, next) => {
    let Car_datas =await CarKmPriceData.find();
    res.json(Car_datas);
    console.log(Car_datas);
})

const findOnedetail = asyncHandler(async(req,res,next)=>{
    let Car_data=await CarKmPriceData.find({vechicleid : req.params.vechicleid});
    if(Car_data.length !=0){
        res.json(Car_data);
        console.log(Car_data);}
    else throw new Error(`No record found for ${req.params.vechicleid}`)
})

const deletedetail = asyncHandler(async (req,res,next)=>{
    let Car_data=await CarKmPriceData.deleteOne({vechicleid : req.params.vechicleid});
    if(Car_data.n !== 0){
          res.status(201).json({success: "Sucessfully Deleted"})}
    else throw new Error(`No record found for ${req.params.vechicleid}`)
})

const updatedetail = asyncHandler(async(req,res,next) => {
    CarKmPriceData.findOneAndUpdate({vechicleid : req.params.vechicleid}, { $set : {"vechicle" :  req.body.vechicle, "minkm" : req.body.minkm, "rateperkm": req.body.rateperkm, "driverallowance": req.body.driverallowance, "amount": req.body.amount} }, (err, doc)=>{
     res.json({success:"Update Successfull"});
     })
 })


module.exports = {insertdetail,findAlldetails,findOnedetail,deletedetail,updatedetail};