var myApp = angular.module('myApp', ['ngRoute']);
angular.module('myApp', ['ngPassword']);

myApp.config(function ($routeProvider) {
  $routeProvider

    .when('/dashboard', {
    templateUrl: '/dashboard.html',
    controller: 'controller'
  })

  .when('/tables', {
    templateUrl: 'pages/tables.html',
    controller: 'controller'
  })

  .when('/forms', {
    templateUrl: 'pages/forms.html',
    controller: 'controller'
  })

.when('/landing', {
    templateUrl: '/landing.html',
    controller: 'controller'
  })
.when('/login', {
    templateUrl: '/login.html',
    controller: 'controller'
  })
.when('/register',{
	templateUrl:'/register.html'	
})

/*
  .otherwise({
    redirectTo: '/login'
	// redirectTo: '/login'
	
  });
*/
});

