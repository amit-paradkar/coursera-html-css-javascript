(function () {
'use strict';

angular.module('HealthCheckApp', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject= ['$scope'];

function LunchCheckController($scope){
  $scope.lunchItems = [];
  $scope.lunchReport="";

  $scope.checkLunch = function () {

    if($scope.lunchItems.length <= 3){
      $scope.lunchReport = "Enjoy!";
    }
    else {
      $scope.lunchReport = "That's too much! Eat wisely.";
    }
  };
}

})();
