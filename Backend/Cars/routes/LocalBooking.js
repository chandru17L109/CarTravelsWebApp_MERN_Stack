var express = require('express')
var router = express.Router()
const {protect,authorize_role} = require('../middleware/authenticate');

const {findAllusers,insertuser,findOneUser,deleteuser,updateuser} = require('../controllers/LocalBooking')

router.route('/')
.get(protect,authorize_role('user','admin'),findAllusers)
.post(protect,authorize_role('user'),insertuser)

router.route('/:user')
.get(protect,authorize_role('user','admin'),findOneUser)

router.route('/:_id')
.delete(protect,authorize_role('user'),deleteuser)
.patch(protect,authorize_role('user','admin'),updateuser)

module.exports = router