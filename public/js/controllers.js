angular.module('mainController', [])
	
	.controller('postController', ['$scope','$http','postService', function($scope, $http, postService) {
		$scope.formData = {};
		// $scope.loading = true;
		
		postService.get().success(function(data) {
			$scope.posts = data;
			// console.log("$scope.posts",$scope.posts);
			// $scope.loading = false;
			});
		
		$scope.createPost = function() {
			console.log("$scope.formData",$scope.formData);
			if ($scope.formData.text != undefined) {
				// $scope.loading = true;				
				postService.create($scope.formData).success(function(data) {
					console.log("$scope.formData",$scope.formData);
					// $scope.loading = false;
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