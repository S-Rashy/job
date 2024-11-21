const express = require("express")
const connectToDB = require("./src/config/index")
const userRouter = require("./src/routes/userRoute")

const app = express()
app.use(express.json())
connectToDB()

app.use("/api/v1/users", userRouter)

const port = 8060
app.listen(port, console.log("App is running on port", port))