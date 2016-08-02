angular.module('myApp', ['smart-table'])
.controller('mainCtrl', ['$scope', '$http', '$filter',
    function ($scope, $http, $filter) {

      $scope.loaded = 0;
      $http.get('data.json').success(function(data) {

        $scope.loaded = 1;
        $scope.skus = data;

        for (var i=0;i<$scope.skus.length;i++) {
          $scope.skus[i].quantity = 0;
          $scope.skus[i].price = 0;
        }

      });

      $scope.totalPrice = function () {
        var skus = $scope.skus;
        var ret = 0;
        for (var i=0;i<skus.length;i++) {
          ret += skus[i].quantity * skus[i].rate ;
        }
        return ret;
      }

    }
])
.filter('unique', function() {
  return function (arr, field) {
    var o = {}, i, l = arr.length, r = [];
    for(i=0; i<l;i+=1) {
      o[arr[i][field]] = arr[i];
    }
    for(i in o) {
      r.push(o[i]);
    }
    return r;
  };
}
);

