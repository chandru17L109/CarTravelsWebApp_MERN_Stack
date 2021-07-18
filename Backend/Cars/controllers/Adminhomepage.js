const adminHomePageDataSchema = require('../model/Adminhomepage.js')
const asyncHandler = require('../middleware/asyncHandler.js');

const insertpackage = async(req,res,next) => {
    try{
        let postNewDetail = await adminHomePageDataSchema.create(req.body);
        console.log(postNewDetail);
        res.status(201).json({success: "Added Sucessfully"})}
    catch(err){next(err);}
}

const findAllpackages = asyncHandler(async(req, res)=>{
    res.status(200).json(res.advancedResults);
})

const findonepackage = async (req,res,next)=>{
    try{
        if(req.params.packagenameid.length === 1){
            let noofdays = req.params.packagenameid;
            let searchData=await adminHomePageDataSchema.find({noofdays : noofdays});
            if(searchData.length !=0){
                res.json(searchData);
                console.log(searchData);}
            else next({message:"no record found"});
        }else{
            let searchData=await adminHomePageDataSchema.find({packagenameid : req.params.packagenameid});
            if(searchData.length !=0){
                res.json(searchData[0]);
                console.log(searchData[0]);}
            else next({message:"no record found"});
        }
    }
    catch(err) {next(err);}
}

const deletepackage = async (req,res,next)=>{
    try{
        let Deletedata=await adminHomePageDataSchema.deleteOne({packagenameid:req.params.packagenameid});
        console.log(Deletedata);
        if(Deletedata.n !== 0){
            res.status(201).json({success: "Sucessfully Deleted"});}
        else next({message:"no record found"});
    }
    catch(err) {next(err);}
}

const updatepackage = async(req,res,next) => {
    adminHomePageDataSchema.findOneAndUpdate({packagenameid: req.params.packagenameid}, { $set : {"packagename" :  req.body.packagename, "packagedetails" : req.body.packagedetails, "packageprice": req.body.packageprice, "packageimage":req.body.packageimage,"noofdays":req.body.noofdays,"carType":req.body.carType} }, (err, doc)=>{
        if(err) next(err);
        res.json({success:"Updated Successfully"});
    })
}


module.exports = {insertpackage,findAllpackages,findonepackage,deletepackage,updatepackage};

// const findAllpackages = async(req,res, next) => {
//     try{
//         let allHomeMainData =await adminHomePageDataSchema.find();
//         res.json(allHomeMainData);
//         console.log(allHomeMainData);}
//     catch(err) {next(err);}
// }

// const findonepackageBasedOnDays = async (req,res,next)=>{
//     try{
//         let searchData=await adminHomePageDataSchema.find({noofdays : req.params.noofdays});
//         if(searchData.length !=0){
//             res.json(searchData);
//             console.log(searchData);}
//         else next({message:"no record found"});
//     }
//     catch(err) {next(err);}
// }
