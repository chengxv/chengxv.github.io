app.controller('bookListController', ['$scope','commonService','$routeParams', function($scope,c_s,$routeParams) {
  c_s.getData($routeParams.id,function(res){
    $scope.objects=res.data;
  });
}]);
