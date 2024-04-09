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
    Rating: {
        type: Number
    }, 
    available: {
        type: boolean
    }

})