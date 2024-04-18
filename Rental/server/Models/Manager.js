import mongoose from "mongoose"

const Schema = mongoose.Schema; 

const ManagerSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,  
        unique: true  
    },
    password: {
        type: String,
        required: true
    },
    bikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Bike'  
    }]
});


const Manager = mongoose.models.Manager || mongoose.model("Manager", ManagerSchema);

export default Manager;
