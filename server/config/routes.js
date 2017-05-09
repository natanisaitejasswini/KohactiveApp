console.log('routes');
var users = require('../controllers/users');

module.exports = function(app){
	// User Routes
	app.post('/users', function(request,response){
		users.login(request,response);
	}) 
	app.get('/users',users.index)
}
