import Bike from "../../Models/Bike.js";
import Manager from "../../Models/Manager.js";

export const addBike = async (req, res) => {
    const { model, location, color, managerID } = req.body;

    try {

        // checking if the manager exists
        const manager = await Manager.findById(managerID);
        if (!manager) {
            return res.status(404).json({ error: "Manager not found" });
        }

        // creating new bike
        const newBike = new Bike({
            model,
            location,
            color,
            managerID  
        });

        // save the new Bike
        const savedBike = await newBike.save();
        console.log('New Bike:', savedBike);

        // update the Manager's bikes array to include the new Bike ID
        manager.bikes.push(savedBike._id);
        await manager.save();  

        res.json({ message: "Bike added successfully" });
    } catch (error) {
        console.error('Error adding bike:', error);
        res.status(500).json({ error: "Failed to add bike" });
    }
};
