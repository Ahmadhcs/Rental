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
    rating: {
        type: Number
    }, 
    available: {
        type: Boolean
    },
    managerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Manager", 
        required: false,
    }, 
    bikeID: {
        type : String 
    }

})

const Bike = mongoose.models.Bike || mongoose.model("Bike", BikeSchema);

export default Bike;
