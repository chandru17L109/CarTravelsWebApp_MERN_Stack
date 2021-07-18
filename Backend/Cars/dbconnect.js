const mongoose = require('mongoose');

const connectToDatabase = async()=>{
     let connection = await mongoose.connect("mongodb://localhost:27017/ctsdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log(`Connected to the database host`.green.bold);
}

module.exports = connectToDatabase;