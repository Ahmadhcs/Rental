import Manager from "../../Models/Manager.js"
import User from "../../Models/User.js"
export const deleteUser = async(req, res) =>{
    const userID = req.query.userID;
    try{
        await Manager.findByIdAndDelete(userID)
        await User.findByIdAndDelete(userID)

        res.json({Message: "User/Manager Deleted successfully "})


    }catch(error){

    }
}