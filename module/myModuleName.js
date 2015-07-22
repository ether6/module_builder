angular.module("module-<myModuleName>", [])
.directive("<myModuleName>", function () {
    return {
        restrict: 'E'
        , replace: true
        , templateUrl: '<myModuleName>.tpl.html'
        , controller: '<myModuleName>Ctrl'
        , controllerAs: '<myModuleName>'
    };
});