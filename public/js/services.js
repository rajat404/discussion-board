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
	.factory('userService', ['$http',function($http) {
	return {
		get : function(username, password) {
			//http://localhost:3000/api/beers?username=denver&password=rocks
			return $http.get('/api/users?username='+username+'&password='+password);
		},
		create : function(data) {
			// return $http.post('/api/users', postData);
	        return $http({
		        headers :{'Content-Type':'application/x-www-form-urlencoded'},
		        method: 'POST',
		        url: '/api/users/',
		        data: data,
		      });
		}
	}
}]);


