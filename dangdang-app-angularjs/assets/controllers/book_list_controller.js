app.controller('book_list_controller',['$scope','$routeParams','commonService',function($scope,c_s,$routeParams){
  c_s.getData($routeParams.id,function(res){
    console.dir(res);
  });
}]);
