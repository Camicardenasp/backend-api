const router = require("express").Router();
const User = require("../models/users");

router.get("/", (req, res) => {
    User.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.post("/", (req, res) => {
    User.create(req.body, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.put("/:id", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.delete("/:id", (req, res) => {
    User.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if(err) throw new Error(err);
        res.end();
    });
});

module.exports = router;