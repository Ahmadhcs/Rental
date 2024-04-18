import Manager from "../../Models/Manager.js";
import Bike from "../../Models/Bike.js";

export const getReservedBikes = async (req, res) => {
    const { managerID } = req.query;  

    try {
        const manager = await Manager.findById(managerID);
        if (!manager) {
            return res.status(404).json({ error: "Manager not found" });
        }

        const reservedBikes = await Bike.find({ managerID: manager._id, isReserved: true })
                                        .populate('reservedBy', 'firstName lastName'); // Only include firstName and lastName from User schema

        if (reservedBikes.length === 0) {
            return res.status(404).json({ message: "No reserved bikes found for this manager." });
        }

        const bikesWithUserDetails = reservedBikes.map(bike => ({
            _id: bike._id,
            model: bike.model,
            color: bike.color,
            location: bike.location,
            reservationStart: bike.reservationStart,
            reservationEnd: bike.reservationEnd,
            reservedBy: bike.reservedBy ? `${bike.reservedBy.firstName} ${bike.reservedBy.lastName}` : 'No user'
        }));

        res.json(bikesWithUserDetails);
    } catch (error) {
        console.error('Failed to fetch reserved bikes:', error);
        res.status(500).json({ error: "Server error while fetching reserved bikes" });
    }
};
