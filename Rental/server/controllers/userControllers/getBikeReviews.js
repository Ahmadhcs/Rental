import Bike from "../../Models/Bike.js"

export const getBikeReviews = async (req, res) => {
    const { bikeID } = req.query;

    try {
        const bike = await Bike.findById(bikeID).populate({
            path: 'reviews',
            populate: { path: 'user', select: 'firstName lastName' } 
        });

        if (!bike) {
            return res.status(404).json({ message: 'Bike not found' });
        }

        if (bike.reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found for this bike' });
        }

        res.status(200).json(bike.reviews);
    } catch (error) {
        console.error('Error fetching bike reviews:', error);
        res.status(500).json({ error: 'Server error while fetching reviews' });
    }
};
