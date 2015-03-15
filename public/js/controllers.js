angular.module('mainController', [])
	
	.controller('postController', ['$scope','$http','postService','$rootScope', function($scope, $http, postService) {
		$scope.formData = {};


    // $rootScope.$on('$routeChangeStart', function (event, next) {
    //     var userAuthenticated = false; // Check if the user is logged in 

    //     if (!userAuthenticated && !next.isLogin) {
    //         // You can save the user's location to take him back to the same page after he has logged-in
    //         // $rootScope.savedLocation = $location.url();

    //         $location.path('/signin');
    //     }
    // });

		
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
	
		$scope.authorized = false;




		$scope.createUser = function(){
			var data = $.param({'username':$scope.email2,'password':$scope.password2});
			console.log(data);
			userService.create(data).success(function(data) {
				$scope.data = data; 
				console.log("$scope.data");
				console.log($scope.data);
				});
			alert('You have been successfully registered.');
		};

		$scope.checkUser = function($location) {

			userService.get($scope.email,$scope.password)
				.success(function(data) {
					$scope.data = data; 
					console.log("$scope.data");
					console.log($scope.data);
					// $location = '/feed';
					// $location.path("/feed");
					$scope.authorized = 1;
					location.href="#/feed";
					})
				.error(function(data){
            		alert('Please enter the correct username & password.');
       				 });

		};

	}]);