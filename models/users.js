const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    code: String,
    is_active: Boolean,
    is_admin: Boolean,
    created_at: Date,
});

module.exports = mongoose.model("users", UserSchema);
