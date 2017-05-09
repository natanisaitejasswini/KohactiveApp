console.log('routes');
var users = require('../controllers/users');
var post = require('../controllers/posts');

module.exports = function(app){
	// User Routes
	app.post('/users', function(request,response){
		users.login(request,response);
	}) 
	app.get('/users',users.index)

	//Post Routes
	app.get('/posts', post.index)
	app.post('/post', post.create)
	app.get('/post/:id', post.show) //showing post on new page
	app.post('/publish',post.publish_post)
	app.delete('/post/:id',post.destroy)
}
