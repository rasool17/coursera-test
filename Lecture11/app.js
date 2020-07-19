(function (){
'use strict';
        
angular.module ('MsgApp',[])
.controller('MsgController', MsgController);
    
MsgController.$inject=['$scope'];
function MsgController ($scope) {
    $scope.name ="Rasool";
    $scope.stateOfBeing="hungry";

    $scope.sayMessage= function () {
        return "Yaakov likes to eat healthy snacks at night!";
    };

    $scope.feedRasool= function () {
        $scope.stateOfBeing="fed";
    };
}
        
})();