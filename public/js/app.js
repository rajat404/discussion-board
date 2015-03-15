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
                when("/signin", {templateUrl: "views/signin.html", controller: "signinController"}).
                when("/feed", {templateUrl: "views/feed.html", controller: "postController", isLogin: true}).
                otherwise({redirectTo: '/'});
}])

.run(['$rootScope', function ($rootScope) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();
      // get me a login modal!
    }
  });

}]);
