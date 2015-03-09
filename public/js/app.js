'use strict';



// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/nodejs', {templateUrl: 'partial/nodejs', controller: NodejsCtrl});
    $routeProvider.when('/js', {templateUrl: 'partial/js', controller: JsCtrl});
    $routeProvider.when('/java', {templateUrl: 'partial/java', controller: JavaCtrl});
    $routeProvider.when('/javajs', {templateUrl: 'partial/javajs', controller: JavaJsCtrl});
    $routeProvider.otherwise({redirectTo: '/nodejs'});
    $locationProvider.html5Mode(true);
  }]);
