const mongoose = require("mongoose");

/**
 * @openapi
 * components:
 *   schemas:
 *     UserSchema:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 63f84796d6ee608337e180f2
 *         name:
 *           type: string
 *           example: Camilo Alberto
 *         lastname:
 *           type: string
 *           example: Cárdenas Poveda
 *         email:
 *           type: string
 *           example: "camicardenasp@gmail.com"
 *         password:
 *           type: string
 *           example: "@Camilo1994"
 *         is_admin:
 *           type: bolean
 *           example: true
 */
const UserSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    is_admin: Boolean
});

module.exports = mongoose.model("users", UserSchema);
