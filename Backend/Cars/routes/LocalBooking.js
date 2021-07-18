var express = require('express')
var router = express.Router()
const {protect,authorize_role} = require('../middleware/authenticate.js');
// const query_find = require('../middleware/query_params');

const {findAllusers,insertuser,findOneUser,deleteuser,updateuser} = require('../controllers/LocalBooking.js')
// const LocalTourDetails = require('../model/Localbooking');

router.route('/')
.get(findAllusers)
.post(protect,authorize_role('user'),insertuser)

router.route('/:user')
.get(findOneUser)

router.route('/:_id')
.delete(protect,authorize_role('user'),deleteuser)
.patch(protect,authorize_role('user','admin'),updateuser)

module.exports = router