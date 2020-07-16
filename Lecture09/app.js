(function (){
'use strict';
    
angular.module ('DIApp',[])
.controller('MyFirstController', DIController);

function DIController ($scope, $filter) {
    $scope.name ="Rasool";

    $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase ($scope.name);
    };
}
    
})();