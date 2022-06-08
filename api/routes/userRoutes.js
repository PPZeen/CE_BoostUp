const userBuilder = require('../controllers/userController');

module.exports = app => {
    app.get('/users', userBuilder.list_all_users);
    app.post('/users/create', userBuilder.create_a_user);
    app.get('/users/:userId', userBuilder.read_a_user);
    app.put('/users/update/:userId', userBuilder.update_a_user);
    app.delete('/users/delete/:userId', userBuilder.delete_a_user);
};