const express = require ("express")
const UserService = require("../services/userService")

const userRouter = express.Router()

userRouter.get("/", (req, res) =>{
    res.send("welcome to the user route")
})
//
userRouter.post("/signup", UserService().SignUserUp);
userRouter.post("/signin", UserService().SignUserIn);

module.exports = userRouter;