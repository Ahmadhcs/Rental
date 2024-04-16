import Manager from "../../Models/Manager.js"
import { generateToken } from "../../helpers/auth.js"
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

        const match = await comparePassword(password, manager.password)

        if (!match) {
            return res.status(401).json({
              error: "Wrong Password",
            });
          }


        delete manager.password

        const token =  generateToken(manager._id)


        return res.json({
          manager,
          token
        })
    



    }catch(error){
        console.log(error)
    }
}