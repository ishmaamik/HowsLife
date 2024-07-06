import User from "../model/User.js";


export const addUser = async (request, response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
            response.status(200).json('user already exists');
            return;
        }

        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json(newUser);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getUser = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const updateUserAbout = async (request, response) => {
    try {
        const { sub, about } = request.body;
        const user = await User.findOneAndUpdate({ sub }, { about }, { new: true });
        if (!user) {
            return response.status(404).json('User not found');
        }
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
};


export const getUserBySub = async (request, response) => {
    try {
        const user = await User.findOne({ sub: request.params.sub });
        if (!user) {
            return response.status(404).json('User not found');
        }
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
};