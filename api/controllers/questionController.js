const mongoose = require('mongoose');
const questions = mongoose.model('questions');

exports.list_all_questions = (req, res) => {
    questions.find({}, (err, question) => {
        if (err) res.send(err);
        res.json(question);
    });
};

exports.create_question = (req, res) => {
    const newQuestion = new questions(req.body);
    newQuestion.save((err, question) => {
        if (err) res.send(err);
        res.json(question);
    });
};