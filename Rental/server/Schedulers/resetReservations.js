
import Bike from '../models/Bike.js';
import cron from "node-cron"

const resetExpiredReservations = async () => {
    console.log("Checking for expired bike reservations...");
    try {
        const bikes = await Bike.find({ 
            isReserved: true, 
            reservationEnd: { $lt: new Date() } 
        });

        if (bikes.length > 0) {
            for (const bike of bikes) {
                bike.isReserved = false;
                bike.reservedBy = null;
                bike.reservationStart = null;
                bike.reservationEnd = null;
                await bike.save();
                console.log(`Reset reservation for bike ID: ${bike._id}`);
            }
        } else {
            console.log("No expired reservations found.");
        }
    } catch (error) {
        console.error('Failed to reset expired reservations:', error);
    }
};


//checking every hour
cron.schedule('0 * * * *', () => {
    resetExpiredReservations();
});