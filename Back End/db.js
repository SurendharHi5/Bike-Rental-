const mongoose = require ("mongoose");

function connectDB (){
    mongoose.connect("mongodb+srv://surendhar:surendhar@cluster0.5kgphsc.mongodb.net/bike-rental")

    const connection = mongoose.connection

    connection.on("connected", ()=>{
        console.log("MongoDB connected")
    })
    connection.on("eroor",()=>{
        console.log("MongoDB Connection failed")
    })
}
connectDB()

module.exports = mongoose




