import User from "../../Models/User.js";
import Review from "../../Models/Review.js"

export const getUserInfo = async (req, res) => {
    const { userID} = req.query;  
    

    try {
        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const reviews = await Review.find({ user: userID }).populate('bike', 'model location');

        res.json({
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
            reviews
        });
    } catch (error) {
        console.error('Failed to retrieve user and reviews:', error);
        // res.json({ error: 'Server error' });
    }
};
