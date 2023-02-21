const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PUERTO = 3030;
const app = express();

const userRoutes = require("./routes/userRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://cami:19940122@miapi.bs3v4go.mongodb.net/users?retryWrites=true&w=majority", connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/users", userRoutes);

app.listen(process.env.PORT||PUERTO, () => {
    console.log("The server is listening on port " + PUERTO);
});