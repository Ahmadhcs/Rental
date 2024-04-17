import mongoose from "mongoose"

const Schema = mongoose.Schema; 


const RatingsSchema = new Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    bike: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bike',
        required: true
    },
})



const Ratings = mongoose.models.Rating || mongoose.model("Ratings", RatingsSchema);

export default Ratings;
