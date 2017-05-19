'use strict';


psApp.controller('UserPhotosController', ['$scope', '$routeParams',
  function($scope, $routeParams) {

    var userId = $routeParams.userId;



    var user_detail_url="/user/"+userId;
    var user_photos_url="/photosOfUser/"+userId;

    var doneCallback1 = function(model) {
      $scope.$apply(function() {
         var user=model;
         $scope.user=user;
         $scope.header.info="Photos of "+user.first_name+" "+user.last_name;
        });
    };

    var doneCallback2 = function(model) {
      $scope.$apply(function() {
         var photos=model;
         $scope.photos=photos;
        });
    };

    $scope.FetchModel(user_detail_url,doneCallback1);
    $scope.FetchModel(user_photos_url,doneCallback2);


  }]);
