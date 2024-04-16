import Bike from "../../Models/Bike.js"
import { generateId } from "../../helpers/generareID.js"
export const addBike = async (req, res) =>{
    const {bike} = req.body
    try{

        const bikeID = generateId()
        console.log(bikeID)

        res.json({message: "woohoo"})



    }catch(error){
        console.log(error)
    }

}
