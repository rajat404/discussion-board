angular.module('mainController', [])
	
	.controller('postController', ['$scope','$http','postService','$rootScope', function($scope, $http, postService, $rootScope) {
		$scope.formData = {};

		postService.get().success(function(data) {
			$scope.posts = data;
			});
		
		$scope.createPost = function() {
			if ($scope.formData.text != undefined) {
				$scope.formData.username = $rootScope.user;
				
				postService.create($scope.formData).success(function(data) {
					$scope.formData = {}; 
					$scope.posts = data; 
				});
			}
		};
	}])

	.controller('signinController', ['$scope','$http','userService','$location','$rootScope', function($scope, $http, userService, $location, $rootScope) {
	
		$rootScope.authorized = false;
		$rootScope.user = null;

		$scope.createUser = function(){
			var data = $.param({'username':$scope.email2,'password':$scope.password2});
			userService.create(data).success(function(data) {
				$scope.data = data; 
				});
			alert('You have been successfully registered. Please log in to views your feed.');
		};

		$scope.logoutUser = function(){
			var data = null;
			$scope.data = null; 
			$rootScope.authorized = false;
			$rootScope.user = null;
			alert('You have been successfully logged out.');
		};

		$scope.checkUser = function($location) {
		$rootScope.user = null;

		userService.get($scope.email,$scope.password)
			.success(function(data) {
				$rootScope.authorized = true;
				$rootScope.user = $scope.email;
				$scope.email = null;
				$scope.password = null;
				location.href="#/feed";
				})
			.error(function(data){
        		alert('Please enter the correct username & password.');
   				 });

		};

	}]);