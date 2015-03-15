// angular.module('discussionApp', ['postController', 'postService']);

// var app=angular.module('discussionApp',['postController', 'postService']).
// config(['$routeProvider', function($routeProvider){
//           $routeProvider.
//                 when("/", {templateUrl: "views/feed.html", controller: "postController"}).
//                 when("/signin", {templateUrl: "views/signin.html", controller: "postController"}).
//                 when("/feed", {templateUrl: "views/feed.html", controller: "postController"}).
//                 otherwise({redirectTo: '/'});
//             }]);



angular.module('discussionApp',['ngRoute', 'mainController', 'mainService']).
config(['$routeProvider', '$locationProvider', function($routeProvider) {
          $routeProvider.
                when("/", {templateUrl: "views/signin.html", controller: "signinController"}).
                when("/signin", {templateUrl: "views/signin.html", controller: "signinController", isLogin: true}).
                when("/feed", {templateUrl: "views/feed.html", controller: "postController"}).
                otherwise({redirectTo: '/'});
}])

.run(['$rootScope', '$location', function ($rootScope, $location) {

  // $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
  //   var requireLogin = toState.data.requireLogin;

  //   if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
  //     event.preventDefault();
  //     // get me a login modal!
  //   }
  // });

    $rootScope.$on('$routeChangeStart', function (event, next) {
        var userAuthenticated = $rootScope.authorized; // Check if the user is logged in 

        if (!userAuthenticated && !next.isLogin) {
        // if (!next.isLogin) {
            // You can save the user's location to take him back to the same page after he has logged-in
            // $rootScope.savedLocation = $location.url();
            alert("Please login to access this page.");
            $location.path('/signin');
        }
    });

}]);
