const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const adminhomepageDataSchema = new Schema({
    packagenameid:  {'type': String,
                     'uppercase': true,
                     'minLength' : [5,'name should not be less than 3 character'],
                      required : [true, 'Provide a packagenameid.. It is mandatory'],
                     'trim': true,
                     'unique':true
                    },
    packagename:    {'type': String,
                     'minLength' : [5,'name should not be less than 3 character'],
                      required : [true, 'Provide a packagename.. It is mandatory'],
                     'trim': true
                    },
    packagedetails: {'type': String, 
                     'trim': true,
                      required : [true, 'Provide a packagedetails.. It is mandatory']
                    },
    packageprice:   {'type': Number,
                     'trim': true,
                      required : [true, 'Provide a drop location.. It is mandatory']
                    },
    packageimage:   {'type':String,
                     'data':Buffer,
                     'trim': true,
                      required : [true, 'Provide a Image.. It is mandatory']
                    },
    packageDate:    {'type': Date, 
                     'default': Date.now()
                    },
    carType:        {'type':String,
                     'minLength' : [8,'Provide a valid car type'],
                     'trim': true,
                       required : [true, 'Provide a Car type(Ac/Non-Ac).. It is mandatory']
                    },
    noofdays:       {'type':Number,
                     'default': 1,
                    },
    user:           {'type': mongoose.Schema.Types.ObjectId,
                      ref: 'signupuserData',
                    //  required: [true,"Provide a Object Id It is mandatory"]
                    }    
    });
const adminHomePageDataSchema= mongoose.model('adminHomePageDataSchema', adminhomepageDataSchema);

module.exports = adminHomePageDataSchema;