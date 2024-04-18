import Bike from "../../Models/Bike.js";
import User from "../../Models/User.js";

export const getUsersReserved = async (req, res) => {
    try {
        // fetch all bikes that are reserved and populate the reservedBy field
        const reservedBikes = await Bike.find({ isReserved: true })
                                        .populate('reservedBy', 'firstName lastName email');

        if (reservedBikes.length === 0) {
            return res.status(404).json({ message: "No bikes are currently reserved." });
        }

        const usersWithBikes = reservedBikes.map(bike => ({
            user: {
                id: bike.reservedBy._id,
                firstName: bike.reservedBy.firstName,
                lastName: bike.reservedBy.lastName,
                email: bike.reservedBy.email,
            },
            bikeDetails: {
                model: bike.model,
                location: bike.location,
                reservationStart: bike.reservationStart,
                reservationEnd: bike.reservationEnd
            }
        }));

        const uniqueUsers = Array.from(new Map(usersWithBikes.map(user => [user.user.id, user])).values());

        res.json(uniqueUsers);
    } catch (error) {
        console.error('Failed to fetch users with reserved bikes:', error);
        res.status(500).json({ error: "Server error while fetching data" });
    }
};
