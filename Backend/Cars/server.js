const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
require('colors');

const SignedUserRoutes = require('./routes/signupuser')
const caruserRoutes = require('./routes/LocalBooking')
const cartouruserRoutes = require('./routes/TourBooking')
const adminhomepageRoute = require('./routes/Adminhomepage')
const carkmpriceRoute = require('./routes/CarKmPrice')
const UsersAttendance = require('./routes/Attendance')

const errorHandler = require('./middleware/errorhandler')
const connectToDatabase = require('./dbconnect')

app.use(cors())
app.use(express.json())

connectToDatabase();

app.use('/api/v1/signedupuserdetails', SignedUserRoutes);
app.use('/api/v1/carbookedusers', caruserRoutes);
app.use('/api/v1/cartourbookedusers', cartouruserRoutes);
app.use('/api/v1/adminHomePage', adminhomepageRoute);
app.use('/api/v1/CarkilometerDetails', carkmpriceRoute);
app.use('/api/v1/AllUsersLog', UsersAttendance);

app.get('/',(req,res)=>{
    res.send("hello API")
})

app.use(errorHandler);

const PORT = process.env.PORT || 8010

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))
