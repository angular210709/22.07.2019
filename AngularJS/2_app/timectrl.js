
// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("timeCtrl", TimeCtrl)


// DI dependency injection - IOC
function TimeCtrl($scope) {
    //alert("hello from time controller")
    
    $scope.time = 10;
    $scope.increaseTime = function() {
        $scope.time++;
    }

}