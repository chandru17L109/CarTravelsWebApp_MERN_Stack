const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TourBookingDataSchema = new Schema({
   name:          {'type': String,
                   'uppercase': true,
                   'minLength' : [3,'name should not be less than 3 character'],
                   'maxLength' : [18,'name should not be greater than 18 character'],
                    // required : [true, 'Provide a name.. It is mandatory'],
                   'trim': true
                  },
   phoneNumber:   {'type': Number,
                   'validate': [/^[6-9]{1}[0-9]{9}$/, 'Please enter a valid phone Number'],
                    // required : [true, 'Provide a phone number.. It is mandatory'],
                   'trim': true
                  },
   packagename:    {'type': String,
                  'minLength' : [5,'name should not be less than 3 character'],
                   required : [true, 'Provide a packagename.. It is mandatory'],
                  'trim': true
                 },
   packageprice:   {'type': Number,
                  'trim': true,
                   required : [true, 'Provide a drop location.. It is mandatory']
                 },
   packageDate:    {'type': Date, 
                  'default': Date.now()
                 },
   carType:     {'type':String,
                  'minLength' : [8,'Provide a valid car type'],
                  'trim': true,
                   required : [true, 'Provide a Car type(Ac/Non-Ac).. It is mandatory']
                 },
   noofdays:       {'type':Number,
                  'default': 1,
                 },
   user:           {'type': mongoose.Schema.Types.ObjectId,
                   ref: 'signupuserData'
                //   required: [true,"Provide a Object Id It is mandatory"]
                 }             
  });


const CarTourBookedUsersData = mongoose.model('CarTourBookedUsersData', TourBookingDataSchema);

module.exports = CarTourBookedUsersData;