import Bike from "../../Models/Bike.js"
export const editBike = async(req,res) => {

    const { model, color, location } = req.body.editData;
    const {bikeID} = req.body; 


    try {
    // Making sure we don't update any empty values
    const updateData = {};
    if (model) updateData.model = model;
    if (color) updateData.color = color;
    if (location) updateData.location = location;

    const updatedBike = await Bike.findByIdAndUpdate(bikeID, { $set: updateData }, { new: true });

    if (!updatedBike) {
        return res.status(404).send('Bike not found');
    }

    res.status(200).json(updatedBike);
} catch (error) {
    console.error('Error updating the bike:', error);
    res.status(500).send(error.message);
}
} 