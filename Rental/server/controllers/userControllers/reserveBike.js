import Bike from "../../Models/Bike.js";
import User from "../../Models/User.js";

export const reserveBike = async (req, res) => {
    const { bikeID, userID, reservationStart, reservationEnd } = req.body;

    console.log(bikeID, userID, reservationStart, reservationEnd)

    try {
        // Ensure the bike is not already reserved
        const bike = await Bike.findById(bikeID);
        if (!bike) {
            return res.status(404).json({ message: "Bike not found." });
        }
        if (bike.isReserved) {
            return res.status(400).json({ message: "Bike is already reserved." });
        }

        // Convert reservation times to Date objects
        const start = new Date(reservationStart);
        const end = new Date(reservationEnd);

        // Update the bike's reservation details
        bike.isReserved = true;
        bike.reservedBy = userID;
        bike.reservationStart = start;
        bike.reservationEnd = end;
        await bike.save();

        res.status(200).json({ message: "Bike reserved successfully", bike });
    } catch (error) {
        console.error("Error reserving bike:", error);
        res.status(500).json({ message: "Failed to reserve bike" });
    }
};
