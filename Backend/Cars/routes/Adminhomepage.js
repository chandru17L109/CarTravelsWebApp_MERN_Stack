var express = require('express')
var router = express.Router()
const {protect,authorize_role} = require('../middleware/authenticate');

const {findAllpackages,insertpackage,findonepackage,deletepackage,updatepackage} = require('../controllers/Adminhomepage')

router.route('/')
.get(findAllpackages)
.post(protect,authorize_role('admin'),insertpackage)

router.route('/:packagenameid')
.get(protect,authorize_role('admin','user'),findonepackage)
.delete(protect,authorize_role('admin'),deletepackage)
.patch(protect,authorize_role('admin'),updatepackage)

module.exports = router