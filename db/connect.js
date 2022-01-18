const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },        
    console.log("**** MongoDB is Connected ****")
    )
}

module.exports = connectDB;


