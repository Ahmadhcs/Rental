import Manager from "../../Models/Manager.js"
import { hashedPassword } from "../../helpers/auth.js";
export const signUp = async(req, res) =>{
    const {email, password, firstName, lastName} = req.body
    try{
        if(!password || password  < 6){
            return res.json({
                error: "Password is required and should be 6 characters long",
              });
        }

        const exists = await Manager.findOne({email})

        if(exists){
            return res.status(409).json({
                error: "Email is taken",
              });
        }


        const theHashedPassword = await hashedPassword(password)
        const manager = await new Manager({
            email, 
            password : theHashedPassword,
            firstName, 
            lastName 
        }).save()


        return res.json({
            manager,
          });

    }catch(error){
        console.log(error)
    }
}