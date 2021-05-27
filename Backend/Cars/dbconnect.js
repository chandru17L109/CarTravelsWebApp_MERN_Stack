const mongoose = require('mongoose');

const connectToDatabase = async()=>{
     let connection = await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log(`Connected to the database host: ${process.env.DB_HOST}, port: ${process.env.DB_PORT}, name: ${process.env.DB_NAME}`.green.bold);
}

module.exports = connectToDatabase;