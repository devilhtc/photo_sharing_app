'use strict';

psApp.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */


    var userId = $routeParams.userId;
    //console.log('UserDetail of ', userId);

    //console.log('window.psmodels.userModel($routeParams.userId)',
    //    window.psmodels.userModel(userId));


    var user_detail_url="/user/"+userId;

    var doneCallback = function(model) {
      $scope.$apply(function() {
        var user=model;
        $scope.user=user;
        $scope.header.info="Details of "+user.first_name+" "+user.last_name;
      });
    };

    $scope.FetchModel(user_detail_url,doneCallback);
  }]);
