import Bike from "../../Models/Bike.js"
import Manager from "../../Models/Manager.js"
export const addBike = async (req, res) =>{
    const {model, location, color, managerID} = req.body
    try{


        const managerExists = await Manager.exists({ _id: managerID });
        if (!managerExists) {
          return res.status(404).json({ error: "manager not found" });
        }
        

        const newBike = await new Bike({
            model,
            location, 
            color, 
            managerID, 

        }).save()
        console.log(newBike)

        res.json({message: "Bike Added"})



    }catch(error){
        console.log(error)
    }

}
