import Bike from "../../Models/Bike.js";
import User from "../../Models/User.js";

export const getUsersReserved = async (req, res) => {
    try {
        // Fetch all bikes that are reserved and deeply populate the reservedBy field
        const reservedBikes = await Bike.find({ isReserved: true }).populate({
            path: 'reservedBy',
            model: User,
            select: 'firstName lastName email'  // Only select the fields you need
        });

        if (reservedBikes.length === 0) {
            return res.status(404).json({ message: "No bikes are currently reserved." });
        }

        // Map over the reserved bikes to structure the response
        const usersWithBikes = reservedBikes.map(bike => ({
            user: bike.reservedBy ? {
                id: bike.reservedBy._id,
                firstName: bike.reservedBy.firstName,
                lastName: bike.reservedBy.lastName,
                email: bike.reservedBy.email,
            } : null,
            bikeDetails: {
                model: bike.model,
                location: bike.location,
                reservationStart: bike.reservationStart,
                reservationEnd: bike.reservationEnd
            }
        }));

        const validEntries = usersWithBikes.filter(entry => entry.user !== null);

        const uniqueUsers = Array.from(new Map(validEntries.map(entry => [entry.user.id, entry])).values());

        res.json(uniqueUsers);
    } catch (error) {
        console.error('Failed to fetch users with reserved bikes:', error);
        res.status(500).json({ error: "Server error while fetching data" });
    }
};
