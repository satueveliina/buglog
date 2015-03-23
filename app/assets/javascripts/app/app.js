angular.module('BugLog',['ngRoute', 'BugLog.controllers', 'BugLog.services'])
.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/templates/dashboard.html',
        controller: 'DashboardController'
    })
    $routeProvider.when('/management', {
        templateUrl: '/templates/management.html',
        controller: 'ManagementController'
    })
        .otherwise({redirectTo: '/'});
});