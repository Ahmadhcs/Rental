import User from "../../Models/User.js"
import { comparePassword } from "../../helpers/auth.js"

export const signIn = async(req, res) =>{
 
    const {email, password } = req.body
    try{
        console.log("here")
        const user = await User.findOne({email})

        if(!user){
            return res.status(403).json({
                error: "No user found",
              });
        }

        const match = await comparePassword(password, user.password)

        if (!match) {
            return res.status(403).json({
              error: "Wrong Password",
            });
          }


        return res.json({user})
    



    }catch(error){
        console.log(error)
    }
}