import mongoose from "mongoose"

const Schema = mongoose.Schema

const BikeSchema = new Schema({
    model :{
        type: String
    }, 
    color: {
        type: String
    }, 
    location: {
        type: String
    }, 
    managerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Manager", 
        required: false,
    }, 
    rating: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ratings", 
            required: false
        }],
    isReserved: { type: Boolean, default: false },
    reservedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    reservationStart: { type: Date, default: null },
    reservationEnd: { type: Date, default: null },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]


})

const Bike = mongoose.models.Bike || mongoose.model("Bike", BikeSchema);

export default Bike;
