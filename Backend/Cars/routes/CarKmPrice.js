var express = require('express')
var router = express.Router()
const {protect,authorize_role} = require('../middleware/authenticate');

const {insertdetail,findAlldetails,findOnedetail,deletedetail,updatedetail} = require('../controllers/CarKmPrice')

router.route('/')
.get(findAlldetails)
.post(protect,authorize_role('admin'),insertdetail)

router.route('/:vechicleid')
.get(protect,authorize_role('admin','user'),findOnedetail)
.delete(protect,authorize_role('admin'),deletedetail)
.patch(protect,authorize_role('admin'),updatedetail)

module.exports = router