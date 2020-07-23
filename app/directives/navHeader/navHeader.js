'use strict';

angular.module('postnsApp')

.directive('navHeader', function(){
    return {
        restrict:'E',
        templateUrl: 'directives/navHeader/navHeader.html',
        scope:{

        }
    };
});