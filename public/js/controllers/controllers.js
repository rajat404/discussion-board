angular.module('postController', [])
	
	.controller('mainController', ['$scope','$http','Posts', function($scope, $http, Posts) {
		$scope.formData = {};
		$scope.loading = true;
		
		Posts.get().success(function(data) {
			$scope.posts = data;
			console.log("$scope.posts",$scope.posts);
			$scope.loading = false;
			});
		
		$scope.createPost = function() {
			if ($scope.formData.text != undefined) {
				$scope.loading = true;				
				Posts.create($scope.formData).success(function(data) {
					$scope.loading = false;
					$scope.formData = {}; 
					$scope.posts = data; 
					});
			}
		};

	}]);