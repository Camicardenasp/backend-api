const userService = require("../services/userService");

const getAllUsers = (req, res) => {
    const { lastname } = req.query;
    try {
        const allUser = userService.getAllUsers({ lastname });
        res.send({ status: "OK", data: allUser });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const createNewUser = (req, res) => {
    const { body } = req;

    if (
        !body.name ||
        !body.lastname ||
        !body.email ||
        !body.password ||
        !body.is_admin
    ) {
        res.status(400).send({
        status: "FAILED",
        data: {
            error:
            "One of the following keys is missing or is empty in request body: 'name', 'lastname', 'email', 'password', 'is_admin'",
        },
        });
    }

    const newUser = {
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        password: body.password,
        is_admin: body.is_admin,
    };

    try {
        const createdUser = userService.createNewUser(newUser);
        res.status(201).send({ status: "OK", data: createdUser });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILDED", data: { error: error?.message || error } });
    }
};

const updateOneUser = (req, res) => {
    const {
        body,
        params: { userId },
    } = req;

    if (!userId) {
        res.status(400).send({
        status: "FAILED",
        data: { error: "Parameter ':userId' can not be empty" },
        });
    }

    try {
        const updatedUser = userService.updateOneUser(userId, body);
        res.send({ status: "OK", data: updatedUser });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const deleteOneUser = (req, res) => {
    const {
        params: { userId },
    } = req;

    if (!userId) {
        res.status(400).send({
        status: "FAILED",
        data: { error: "Parameter ':userId' can not be empty" },
        });
    }

    try {
        userService.deleteOneUser(userId);
        res.status(204).send({ status: "OK" });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateOneUser,
    deleteOneUser,
};
