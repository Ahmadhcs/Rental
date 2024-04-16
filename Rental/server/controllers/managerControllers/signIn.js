import Manager from "../../Models/Manager.js"
import { comparePassword } from "../../helpers/auth.js"

export const signIn = async(req, res) =>{
    const {email, password } = req.body
    try{
        const manager = await Manager.findOne({email})

        if(!manager){
            return res.status(404).json({
                error: "No managera account found",
              });
        }

        const match = await comparePassword(password, user.password)

        if (!match) {
            return res.status(401).json({
              error: "Wrong Password",
            });
          }


        delete manager.password


        return res.json({manager})
    



    }catch(error){
        console.log(error)
    }
}