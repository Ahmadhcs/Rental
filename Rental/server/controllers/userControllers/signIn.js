import User from "../../Models/User.js"
import { comparePassword } from "../../helpers/auth.js"

export const signIn = async(req, res) =>{
    console.log("he")
    const {email, password } = req.body
    try{
        console.log("here")
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


        return res.json({user})
    



    }catch(error){
        console.log(error)
    }
}