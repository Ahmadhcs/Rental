import Manager from "../../Models/Manager.js"
import Bike from "../../Models/Bike.js"
export const getBikes = async(req, res) => {
    const {managerID} = req.body
    try{

        const bikeArray = await Bike.find({managerID}).exec();


        res.json({bikes: bikeArray})


    }catch(error){
        console.log(error)
    }

}