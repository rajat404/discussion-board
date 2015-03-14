angular.module('mainController', [])
	
	.controller('postController', ['$scope','$http','postService', function($scope, $http, postService) {
		$scope.formData = {};
		
		postService.get().success(function(data) {
			$scope.posts = data;
			// console.log("$scope.posts",$scope.posts);
			});
		
		$scope.createPost = function() {
			if ($scope.formData.text != undefined) {
				postService.create($scope.formData).success(function(data) {
					$scope.formData = {}; 
					$scope.posts = data; 
					});
			}
		};

	}])

	.controller('signinController', ['$scope','$http','postService', function($scope, $http, postService) {
	
		$scope.showAlert = function(){
			alert('You have been successfully registered.');
		};

	}]);