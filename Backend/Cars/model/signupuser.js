const mongoose = require('mongoose');
var colors = require('colors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;
const signupuserDataSchema = new Schema({
    username:  {'type': String,
                'uppercase': true,
                'minLength' : [3,'name should not be less than 3 character'],
                'maxLength' : [20,'name should not be greater than 20 character'],
                required : [true, 'Provide a Unique UserId/UserName'],
                'trim': true,
                'unique':true
                },
    emailid:    {'type': String,
                  match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
                  required : [true, 'Provide a Unique Email-Id'],
                  'trim': true,
                  'unique':true
                },
    phonenumber: {'type': Number,
                 'validate': [/^[6-9]{1}[0-9]{9}$/, 'Please enter a valid phone Number'],
                  required : [true, 'Provide a phone number.. It is mandatory'],
                  'trim': true
                },
    password:   {'type': String,
                 'trim': true,
                 'minLength' : [8,'name should not be less than 8 character'],
                 'maxLength' : [20,'name should not be greater than 20 character'],
                 required : [true, 'Provide a Password.. It is mandatory']
                },
    role:      {
                  type: String,
                  enum: ['user','admin'],
                  default: 'user'
                }
  });


signupuserDataSchema.methods.generateToken = async function(){
    let token = await jwt.sign({id: this._id,role: this.role, emailid : this.emailid, username : this.username }, process.env.JSON_SECRET_KEY);
    return token;
}

signupuserDataSchema.methods.matchPassword = async function(enteredPassword){
    console.log("currentpassword  => ".magenta,enteredPassword);
    return await bcrypt.compare(enteredPassword, this.password);
}

signupuserDataSchema.pre('save', async function() {
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
  });

const signupuserData = mongoose.model('signupuserData', signupuserDataSchema);

module.exports = signupuserData;