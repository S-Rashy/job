const User  = require("../models/userModel")
const crypto = require("crypto")
const bcrypt = require("bcrypt")

const UserService = () =>{
    const SignUserUp =  async (req, res) =>{
        try{
            let newUser = new User();
            newUser.firstName = req.body.firstName
            newUser.lastName = req.body.lastName
            newUser.emailAddress = req.body.emailAddress
            newUser.phoneNumber = req.body.phoneNumber
            newUser.type = req.body.type

            const saltRound = 10;
            const hash = await bcrypt.hash(req.body.password, saltRound);
            newUser.password = hash

            console.log(hash);
            res.send("password hashed")
            

        newUser.save()
        .then((data) => {
            res.send("User registration successful")
        })
        .catch (err => {
            console.log(err);
            res.send("Error occured") 
        })
    }
        catch(err) {
            res.send("There is an error with your request")
        }
}

const SignUserIn = async (req, res) =>{
    try{
        const userData = await User.findOne({
            emailAddress: req.body.emailAddress,
        });
        if (userData) {
           console.log(userData.password);
            let isPasswordCorrect = bcrypt.compareSync(req.body.password, userData.password);
           console.log(isPasswordCorrect);
           
            if (isPasswordCorrect) {
                res.json({
                    message: "welcome home",
                    data: userData,
                });
            } else {
                res.send("you are not one of us")
            }
        } else{
            res.send ("you are not one of us")
        }
    } catch(err) { 
        res.send("an error occured")
    }
};
    return{SignUserUp, SignUserIn}
}

module.exports = UserService;