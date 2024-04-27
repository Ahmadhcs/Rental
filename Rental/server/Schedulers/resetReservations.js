import Bike from '../models/Bike.js';
import cron from 'node-cron';

export const resetExpiredReservations = async () => {
    console.log('Checking for expired bike reservations...');
    try {
        console.log("hgello")
        const bikes = await Bike.find({
            isReserved: true,
            reservationEnd: { $lt: new Date() },
        });

        const resetPromises = bikes.map((bike) => {
            bike.isReserved = false;
            bike.reservedBy = null;
            bike.reservationStart = null;
            bike.reservationEnd = null;
            return bike.save(); 
        });

        await Promise.all(resetPromises);
        
        console.log(`Reset reservations for ${bikes.length} bikes.`);
    } catch (error) {
        console.error('Failed to reset expired reservations:', error);
    }
};

cron.schedule('* * * * *', resetExpiredReservations, {
    scheduled: true,
});
