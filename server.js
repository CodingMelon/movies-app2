let express = require('express');
let app = express();
let mongojs = require('mongojs');
let db = mongojs('movies_db', ['movies_db']);
let bodyParser = require('body-parser');

let port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());

// let movies = [
// 	{
// 		title: 'The Terminator',
// 		rating: 8.0,
// 		releaseYear: 1984,
// 		length: 120
// 	},
// 	{
// 		title: 'Iron Man',
// 		rating: 7.9,
// 		releaseYear: 2008,
// 		length: 118
// 	},
// 	{
// 		title: 'Star Wars: Return of the Jedi',
// 		rating: 8.3,
// 		releaseYear: 1983,
// 		length: 102
// 	}
// ]

app.get('/movies', function(request, response) {
	console.log('Server received GET request from Angular controller');
	// console.log(movies);
	// response.json(movies);

	db.movies_db.find(function(error, docs){
		response.json(docs);
	});
});

app.post('/movies', function(request, response){
	console.log(request.body);
	db.movies_db.insert(request.body, function(error, doc){
		response.json(doc);
	});
});

app.delete('/movies/:id', function(request, response){
	let id = request.params.id;
	// console.log(id);
	db.movies_db.remove({_id: mongojs.ObjectID(id)}, function(error, doc){
		response.json(doc);
	});
});

app.listen(port, function() {
    console.log('server starting at http://localhost:' + port);
});