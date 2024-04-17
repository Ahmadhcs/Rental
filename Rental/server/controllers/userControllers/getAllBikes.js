import Bike from "../../Models/Bike.js"
export const getAllBikes = async(req, res) => {
    try{

        const bikes = await Bike.find();

        res.send({bikes})

    }catch(error){
        console.log(error)
    }
}