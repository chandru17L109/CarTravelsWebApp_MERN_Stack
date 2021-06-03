var express = require('express')
var router = express.Router()
const {protect,authorize_role} = require('../middleware/authenticate');
const query_find = require('../middleware/query_params');
const {findAllpackages,insertpackage,findonepackage,deletepackage,updatepackage} = require('../controllers/Adminhomepage')

const adminTourPackageDetails = require('../model/Adminhomepage');

router.route('/')
.get(query_find(adminTourPackageDetails),findAllpackages)
.post(protect,authorize_role('admin'),insertpackage)

router.route('/:packagenameid')
.get(protect,authorize_role('admin','user'),findonepackage)
.delete(protect,authorize_role('admin'),deletepackage)
.patch(protect,authorize_role('admin'),updatepackage)

module.exports = router