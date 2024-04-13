import User from "../../Models/User.js"
import { hashedPassword } from "../../helpers/auth.js";
export const signUp = async(req, res) =>{
    const {email, password, firstName, lastName} = req.body
    try{
        if(!password || password  < 6){
            return res.json({
                error: "Password is required and should be 6 characters long",
              });
        }

        const exists = await User.findOne({email})

        if(exists){
            return res.status(409).json({
                error: "Email is taken",
              });
        }


        const theHashedPassword = await hashedPassword(password)
        const user = await new User({
            email, 
            password : theHashedPassword,
            firstName, 
            lastName 
        }).save()


        return res.json({
            user,
          });

    }catch(error){
        console.log(error)
    }
}