import Bike from "../../Models/Bike.js"
import Ratings from "../../Models/Ratings.js"
export const rateBike = async(req, res) => {
    const {userID, rating, bikeID} = req.body
    try{

        let existingRating = await Ratings.findOne({ user: userID, bike: bikeID });

        if (existingRating) {
            existingRating.rating = rating;
            await existingRating.save();
            res.status(200).json({ message: 'Rating updated successfully', rating: existingRating });
        } else {
            const newRating = new Ratings({
                user: userID,
                bike: bikeID,
                rating: rating
            });
            await newRating.save();
            res.status(201).json({ message: 'Rating added successfully', rating: newRating });
        }

        
    }catch(error){
        console.log(error)
    }
}