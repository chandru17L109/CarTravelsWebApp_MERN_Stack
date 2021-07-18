const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarlocalUsersDataSchema = new Schema({
   user_name:     {'type': String,
                   'uppercase': true,
                   'minLength' : [3,'name should not be less than 3 character'],
                  //  'maxLength' : [18,'name should not be greater than 18 character'],
                    required : [true, 'Provide a name.. It is mandatory'],
                   'trim': true
                  },
   phoneNumber:   {'type': Number,
                   'validate': [/^[6-9]{1}[0-9]{9}$/, 'Please enter a valid phone Number'],
                    required : [true, 'Provide a phone number.. It is mandatory'],
                   'trim': true
                  },
   FromLocation:  {'type': String, 
                   'minLength' : [10,'Please provide a proper address'],
                   'trim': true,
                    required : [true, 'Provide a pickup location.. It is mandatory']
                  },
   ToLocation:    {'type': String,
                   'minLength' : [10,'Please provide a proper address'],
                   'trim': true,
                    required : [true, 'Provide a drop location.. It is mandatory']
                  },
   DateTime:      {'type': String, 
                   'default': new Date().toLocaleString()
                  },
   user:          {'type': mongoose.Schema.Types.ObjectId,
                    ref: 'signupuserData',
                    required: [true,"Provide a Object Id It is mandatory"]
                  },
   usernameid :    {'type': String
                  }         
  });

const CarLocalBookedUsersData = mongoose.model('CarLocalBookedUsersData',CarlocalUsersDataSchema);
module.exports = CarLocalBookedUsersData;