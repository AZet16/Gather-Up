const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            
            useNewUrlParser: true,
            //useUnifiedTopology: true,
            
        });

        console.log(`MongodDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`DB Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;
