angular.module('mainService', [])

	.factory('postService', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/posts');
			},
			create : function(postData) {
				return $http.post('/api/posts', postData);
			}
		}
	}])
	.factory('Users', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/api/users');
		},
		create : function(postData) {
			return $http.post('/api/users', postData);
		}
	}
}]);