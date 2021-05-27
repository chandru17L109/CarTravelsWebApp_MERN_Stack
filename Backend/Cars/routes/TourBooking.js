var express = require('express')
var router = express.Router()
const {protect,authorize_role} = require('../middleware/authenticate');

const {findAllusers,insertuser,findOneUser,deleteuser} = require('../controllers/TourBooking')

router.route('/')
.get(protect,authorize_role('user','admin'),findAllusers)
.post(protect,authorize_role('user'),insertuser)

router.route('/:user')
.get(protect,authorize_role('user','admin'),findOneUser)

router.route('/:_id')
.delete(protect,authorize_role('user'),deleteuser)


module.exports = router

// .patch(protect,authorize_role('user','admin'),updateuser)