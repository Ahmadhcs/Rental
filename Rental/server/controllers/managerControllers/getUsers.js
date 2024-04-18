import Manager from "../../Models/Manager.js"
import User from "../../Models/User.js"

export const getUsers = async (req, res) => {
    try {
        const [users, managers] = await Promise.all([
            User.find({}).select('-password').exec(),   // fetching all users removing pw 
            Manager.find({}).select('-password').exec()// fetching all managers removing pw 
        ]);

        res.status(200).json({users, managers});
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while retrieving users and managers');
    }
};
