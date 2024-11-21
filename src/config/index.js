const mongoose = require("mongoose")

const connectToDB = () =>{
const db_url = "mongodb+srv://sadiqrashidah:sntxjUVt7EVC9bXS@cluster0.gj52h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(db_url)
.then(()=> console.log("db connected"))
.catch(err => console.log(err))
}

module.exports = connectToDB;