import Bike from "../../Models/Bike.js"
import { generateId } from "../../helpers/generareID.js"
export const addBike = async (req, res) =>{
    const {model, location, color, companyID} = req.body
    try{

        console.log("here for bikes")
        const bikeID = generateId()
        const newBike = await new Bike({
            model,
            location, 
            rating: 0, 
            color, 
            companyID, 
            bikeID,

        }).save()
        console.log(newBike)

        res.json({message: "Bike Added"})



    }catch(error){
        console.log(error)
    }

}
