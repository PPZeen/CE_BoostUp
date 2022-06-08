const mongoose = require('mongoose');
const submits = mongoose.model('submits');

exports.list_all_submits = (req, res) => {
    submits.find({}, (err, submit) => {
        if (err) res.send(err);
        res.json(submit);
    });
};

exports.create_submit = (req, res) => {
    const newSubmit = new submits(req.body);
    newSubmit.save((err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
};