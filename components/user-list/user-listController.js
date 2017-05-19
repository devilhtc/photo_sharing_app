'use strict';

psApp.controller('UserListController', ['$scope',
    function ($scope) {
        $scope.main.title = 'Users';

        //console.log('window.psmodels.userListModel()', window.psmodels.userListModel());

        $scope.header.info="User List";
        $scope.users=[];
        var user_list_url="/user/list";

        var doneCallback = function(model) {
          $scope.$apply(function() {
            $scope.users=model;
          });
        };

        $scope.FetchModel(user_list_url,doneCallback);

    }]);
