'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

<<<<<<< HEAD
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

<<<<<<< HEAD
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
=======
  //$scope.orderProp = 'age';
=======
phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    //$scope.phones = data;
    $scope.phones = data.splice(0, 5);
  });

  $scope.orderProp = 'age';


>>>>>>> 6e348ad
});
>>>>>>> f06f1f6
