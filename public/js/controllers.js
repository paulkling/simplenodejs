'use strict';


/* Controllers */
function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/title2'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function JsCtrl($scope, $http) {
  $http({method: 'GET',
    url: 'http://127.0.0.1:3000/api/nodejs',
    dataType: '',
  }).success(function(data, status, headers, config) {
    $scope.name = data.name + " from client";
    $scope.lastname = data.lastname;
  }).error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function JavaJsCtrl($scope, $http) {
  $http({method: 'GET',
    url: 'http://127.0.0.1:8080/api',
    dataType: '',
  }).success(function(data, status, headers, config) {
    $scope.name = data.name + " from client";
  }).error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function NodejsCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/nodejs'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
    $scope.firstname = data.firstname;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}


function JavaCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/java'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}
