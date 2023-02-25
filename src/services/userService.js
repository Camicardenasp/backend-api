const { v4: uuid } = require("uuid");

const getAllUsers = () => {

};

const createNewUser = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdUser = User.create(req.body, (err, result) => {
            if(err) throw new Error(err);
            res.json(result);
        });
        return createdUser;
    } catch (error) {
        throw error;
    }
};

const updateOneUser = (Id, changes) => {
    try {
        const updatedUser = User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
            if(err) throw new Error(err);
            res.json(result);
        });
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

const deleteOneUser = (Id) => {
    try {
        User.findOneAndRemove({ _id: req.params.id }, (err, result) => {
            if(err) throw new Error(err);
            res.end();
    });
    } 
        catch (error) {
        throw error;
    }
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateOneUser,
    deleteOneUser,
};