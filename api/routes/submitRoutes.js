const submitBuilder = require('../controllers/submitController');

module.exports = app => {
    app.get('/submits', submitBuilder.list_all_submits);
    app.post('/submits/create', submitBuilder.create_submit);
};