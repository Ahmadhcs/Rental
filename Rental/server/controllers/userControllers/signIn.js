import User from "../../Models/User.js"
import { comparePassword, generateToken } from "../../helpers/auth.js"

export const signIn = async(req, res) =>{
    const {email, password } = req.body
    try{
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                error: "No user found",
              });
        }

        const match = await comparePassword(password, user.password)

        if (!match) {
            return res.status(401).json({
              error: "Wrong Password",
            });
          }


        delete user.password

        const token =  generateToken(user._id)

        return res.json({user, token})
    



    }catch(error){
        console.log(error)
    }
}