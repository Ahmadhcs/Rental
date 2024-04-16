import Bike from "../../Models/Bike.js";

export const deleteBike = async (req, res) => {
    const { bikeID } = req.body;

    if (!bikeID) {
        return res.status(400).json({ message: "Bike ID must be provided" });
    }

    try {
        const deletedBike = await Bike.findByIdAndDelete(bikeID);
        if (!deletedBike) {
            return res.status(404).json({ message: "Bike not found" });
        }
        res.status(200).json({ message: "Bike deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};