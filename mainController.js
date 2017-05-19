'use strict';

var psApp = angular.module('psApp', ['ngRoute', 'ngMaterial']);

psApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'components/user-list/user-listTemplate.html',
                controller: 'UserListController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController'
            }).
            when('/photos/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

psApp.controller('MainController', ['$scope',
    function ($scope) {
        $scope.main = {};
        $scope.main.title = 'Users';

        $scope.header={};

        $scope.FetchModel = function(url, doneCallback) {

          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) { // DONE
              var response=this.responseText;
              var model=JSON.parse(response);
              doneCallback(model);
            }
          };
          xhr.open("GET", url);
          xhr.send();
        };

        var test_url="/test/info";
        function doneCallback(model) {
          $scope.$apply(function() {
            $scope.schema_version=model.__v;
          });
        }

        $scope.FetchModel(test_url,doneCallback);


    }]);
