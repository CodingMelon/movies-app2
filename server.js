let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

let movies = [
	{
		title: 'The Terminator',
		rating: 8.0,
		releaseYear: 1984,
		length: 120
	},
	{
		title: 'Iron Man',
		rating: 7.9,
		releaseYear: 2008,
		length: 118
	},
	{
		title: 'Star Wars: Return of the Jedi',
		rating: 8.3,
		releaseYear: 1983,
		length: 102
	}
]

app.get('/movies', function(request, response) {
	console.log('Server received GET request from Angular controller');
	console.log(movies);
});

app.listen(port, function() {
    console.log('server starting at http://localhost:' + port);
});