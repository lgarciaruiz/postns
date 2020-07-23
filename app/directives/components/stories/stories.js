'use strict';

angular.module('postnsApp')

.directive('stories',function(){
    return {
        restrict:'E',
        templateUrl: 'directives/components/stories/stories.html',
        scope:{

        },
        controller: storiesController
    }
});

var storiesController = ['$scope', function($scope){
    $scope.tests = ['first story','second story','third story']
}];