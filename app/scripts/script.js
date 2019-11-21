'use strict';

let moviesApp = angular.module('moviesApp', []);

moviesApp.controller('moviesController', function($scope, $http) {

	// $scope.movies = [
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
	// ];

	$scope.addMovie = function() {
		$scope.movies.push(
			{
				title: $scope.movie.title,
				rating: $scope.movie.rating,
				releaseYear: $scope.movie.releaseYear,
				length: $scope.movie.length
			}
		);

		clearInputs();
	}

	function clearInputs() {
		$scope.movie.title = '';
		$scope.movie.rating = '';
		$scope.movie.releaseYear = '';
		$scope.movie.length = '';
	}

});