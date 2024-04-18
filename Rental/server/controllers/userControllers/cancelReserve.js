import Bike from "../../Models/Bike.js";
export const cancelReserve = async (req, res) => {
    const { bikeID, userID } = req.query;

    try {
        const bike = await Bike.findById(bikeID);
        if (!bike) {
            return res.status(404).json({ message: "Bike not found." });
        }
        if (!bike.isReserved || bike.reservedBy.toString() !== userID) {
            return res.status(400).json({ message: "No reservation by this user to cancel." });
        }

        bike.isReserved = false;
        bike.reservedBy = null;
        bike.reservationStart = null;
        bike.reservationEnd = null;
        await bike.save();

        res.status(200).json({ message: "Reservation cancelled successfully", bike });
    } catch (error) {
        console.error("Error cancelling reservation:", error);
        res.status(500).json({ message: "Failed to cancel reservation" });
    }
};
