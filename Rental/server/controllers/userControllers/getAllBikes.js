import Bike from "../../Models/Bike.js"
import Ratings from "../../Models/Ratings.js";
export const getAllBikes = async(req, res) => {
    try{

        const bikesWithRatings = await Bike.aggregate([
            {
                $lookup: {
                    from: "ratings", 
                    localField: "_id",
                    foreignField: "bike",
                    as: "ratings"
                }
            },
            {
                $addFields: {
                    averageRating: { $avg: "$ratings.rating" }
                }
            },
            {
                $project: {
                    ratings: 0 
                }
            }
        ]);

        res.send({ bikes: bikesWithRatings });
    }catch(error){
        console.log(error)
    }
}