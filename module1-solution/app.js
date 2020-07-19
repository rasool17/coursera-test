(function (){
    'use strict';
        
    angular.module ('LunchCheck',[])
        .controller('LunchCheckController', LunchCheckController);
    
    
    LunchCheckController.$inject=['$scope'];
    
    function LunchCheckController ($scope) {
        $scope.inputMessage="";
        $scope.newMessage="";
        $scope.changeMessage= function () {
            var array= $scope.inputMessage.split(',');
            if ($scope.inputMessage=="") {
                $scope.newMessage="Please enter data first";
            } else if ($scope.inputMessage!="") {
                if(array.length <= 3) {
                $scope.newMessage="Enjoy!";
                } else {
                $scope.newMessage="Too much!";
                }
            }
        };
    }       
})();