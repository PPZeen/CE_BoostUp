const questionBuilder = require('../controllers/questionController');

module.exports = app => {
    app.get('/questions', questionBuilder.list_all_questions);
    app.post('/questions/create', questionBuilder.create_question);
};