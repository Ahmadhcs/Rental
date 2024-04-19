import mongoose from "mongoose"

const Schema = mongoose.Schema; 


const reviewSchema = new Schema({ 
    bike: { type: Schema.Types.ObjectId, ref: 'Bike', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})



const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
