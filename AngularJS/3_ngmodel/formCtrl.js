
// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("formCtrl", FormCtrl)


// DI dependency injection - IOC
function FormCtrl($scope) {

    
    $scope.person = new Person('')
    $scope.name = '';
    $scope.resetName = function() {
        $scope.name=''
    }

}

class Person
{
    constructor(name)
    {
        this.name = name
    }
}