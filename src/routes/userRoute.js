const express = require ("express")
const UserService = require("../services/userService")
const validateUser = require("../middlewares/authvalidation")

const userRouter = express.Router()

// userRouter.get("/allusers", (req, res) =>{
//     try {
//         const users =  User.find(); // Fetch all users from the database
//         res.status(200).json(users); // Send users as JSON
//       } catch (err) {
//         console.error('Error fetching users:', err);
//         res.status(500).json({ error: 'An error occurred while retrieving users' });
//       }
// })



// userRouter.get()
//
userRouter.post("/signup", UserService().SignUserUp);
userRouter.post("/signin", UserService().SignUserIn);
userRouter.get("/allusers", validateUser, UserService().AllUsers);

module.exports = userRouter;