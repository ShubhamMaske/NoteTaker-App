const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log("Database connnect")
    } catch (err) {
        console.log(err)
    }
}


module.exports = connectDB