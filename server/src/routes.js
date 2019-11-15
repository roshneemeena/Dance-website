const AuthenticationController = require('./controllers/AutheniticationController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationController.register)
}
