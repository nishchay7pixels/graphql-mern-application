const mongoose = require('mongoose');

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.mongo_uri)
    console.log('Connected to MongoDB: ', conn.connection.host)
}

module.exports = connectDB;