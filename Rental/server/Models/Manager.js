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
        type: String
    },
    password: {
        type: String
    }

})

const Manager = mongoose.models.Manager || mongoose.model("Manager", ManagerSchema);

export default Manager;
