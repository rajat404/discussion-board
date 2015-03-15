angular.module('discussionApp',['ngRoute', 'mainController', 'mainService']).
config(['$routeProvider', '$locationProvider', function($routeProvider) {
          $routeProvider.
                when("/", {templateUrl: "views/signin.html", controller: "signinController"}).
                when("/signin", {templateUrl: "views/signin.html", controller: "signinController", isLogin: true}).
                when("/signout", {templateUrl: "views/signin.html", controller: "signinController", isLogin: false}).
                when("/feed", {templateUrl: "views/feed.html", controller: "postController"}).
                otherwise({redirectTo: '/'});
}])

.run(['$rootScope', '$location', function ($rootScope, $location) {

    $rootScope.$on('$routeChangeStart', function (event, next) {
        var userAuthenticated = $rootScope.authorized;

        if (!userAuthenticated && !next.isLogin) {
            alert("Please login to access this page.");
            $location.path('/signin');
        }
    });

}]);
