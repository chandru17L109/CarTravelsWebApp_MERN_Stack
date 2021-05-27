const adminHomePageDataSchema = require('../model/Adminhomepage')

const insertpackage = async(req,res,next) => {
    try{
        let postNewDetail = await adminHomePageDataSchema.create(req.body);
        console.log(postNewDetail);
        res.status(201).json({success: "Added Sucessfully"})}
    catch(err){next(err);}
}
const findAllpackages = async(req,res, next) => {
    try{
        let allHomeMainData =await adminHomePageDataSchema.find();
        res.json(allHomeMainData);
        console.log(allHomeMainData);}
    catch(err) {next(err);}
}
const findonepackage = async (req,res,next)=>{
    try{
        let searchData=await adminHomePageDataSchema.find({packagenameid : req.params.packagenameid});
        if(searchData.length !=0){
            res.json(searchData[0]);
            console.log(searchData[0]);}
        else next({message:"no record found"});
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
