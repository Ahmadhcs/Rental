import Review from "../../Models/Review.js";
import Bike from "../../Models/Bike.js"; // Ensure this import is correct

export const createReview = async (req, res) => {
    const { bikeID, userID, text } = req.body;

    try {
        // create a new review
        const newReview = new Review({
            bike: bikeID,
            user: userID,
            text: text,
        });

        const savedReview = await newReview.save();

        // adding the review into the  bike's reviews array
        await Bike.findByIdAndUpdate(bikeID, { 
            $push: { reviews: savedReview._id } 
        });

        res.status(201).json({ message: 'Review successfully created', review: savedReview });
    } catch (error) {
        console.error('Error creating review:', error);
        res.status(500).json({ error: 'Server error while creating review' });
    }
};
