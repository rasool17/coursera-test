(function (){
'use strict';

angular.module ('myFirstApp',[])

.controller('MyFirstController', function ($scope) {
   $scope.name="Rasool";
   $scope.sayhello=function () {
        return "Hello Coursera";
   };


});

})();