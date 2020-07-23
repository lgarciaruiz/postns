'use strict';

angular.module('postnsApp')

.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url:'/home',
                component:'home'
            });

        $urlRouterProvider.otherwise('home');
    }
]);