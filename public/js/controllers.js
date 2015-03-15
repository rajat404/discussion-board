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

	.controller('signinController', ['$scope','$http','userService','$location', function($scope, $http, userService, $location) {
	
		$scope.createUser = function(){
			var data = $.param({'username':$scope.email2,'password':$scope.password2});
			console.log(data);
			userService.create(data).success(function(data) {
				$scope.data = data; 
				console.log("$scope.data");
				console.log($scope.data);
				});
			// alert('You have been successfully registered.');
		};

		$scope.checkUser = function($location) {

			userService.get($scope.email,$scope.password)
				.success(function(data) {
					$scope.data = data; 
					console.log("$scope.data");
					console.log($scope.data);
					// $location = '/feed';
					// $location.path("/feed");
					location.href="#/feed";
					})
				.error(function(data){
            		alert('Please enter the correct username & password.');
       				 });

		};

	}]);