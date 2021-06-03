const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarKmPriceDataSchema = new Schema({
   vechicleid:  {
                  'type': String,
                  'uppercase': true,
                  'minLength' : [3,'name should not be less than 3 character'],
                  'maxLength' : [30,'name should not be greater than 30 character'],
                   required : [true, 'Provide a vechicle name.. It is mandatory'],
                   'trim': true,
                   'unique':true
                },
   vechicle:     {'type': String,
                   'uppercase': true,
                   'minLength' : [3,'name should not be less than 3 character'],
                   'maxLength' : [30,'name should not be greater than 30 character'],
                    required : [true, 'Provide a vechicle name.. It is mandatory'],
                   'trim': true
                  },
   minkm:         {'type': Number,
                  required : [true, 'Provide a Minimum kilometer.. It is mandatory'],
                  },
   rateperkm:      {'type': Number, 
                     required : [true, 'Provide a  rateperkm.. It is mandatory']
                   },
   driverallowance:{'type': Number
                   },
   amount:        {'type': Number, 
                    required : [true, 'Provide a drop location.. It is mandatory']
                  }           
  });


const CarKmPriceData = mongoose.model('CarKmPriceData', CarKmPriceDataSchema);

module.exports = CarKmPriceData;