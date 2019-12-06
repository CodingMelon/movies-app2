'use strict';

let moviesApp = angular.module('moviesApp', []);

moviesApp.controller('moviesController', function($scope, $http) {

	let getMovies = function() {
		$http.get('/movies').then(function(response) {
			$scope.movies = response.data;
		});
	}

	getMovies();

	// $scope.addMovie = function() {
	// 	$scope.movies.push(
	// 		{
	// 			title: $scope.movie.title,
	// 			rating: $scope.movie.rating,
	// 			releaseYear: $scope.movie.releaseYear,
	// 			length: $scope.movie.length
	// 		}
	// 	);

	// 	clearInputs();
	// }

	$scope.addMovie = function() {
		// console.log($scope.movie);
		$http.post('/movies', $scope.movie).then(function(response) {
			getMovies();
			clearInputs();
		});
	}

	$scope.deleteMovie = function(id) {
		// console.log(id);
		$http.delete('/movies/' + id).then(function(response){
			getMovies();
		});
	}

	function clearInputs() {
		$scope.movie.title = '';
		$scope.movie.rating = '';
		$scope.movie.releaseYear = '';
		$scope.movie.length = '';
	}

});