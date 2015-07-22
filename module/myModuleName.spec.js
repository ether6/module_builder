describe('<myModuleName>', function(){
    var scope, state, ctrl;
     
    beforeEach(module('module-<myModuleName>'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        state = {};
        ctrl = $controller('<myModuleName>Ctrl', {$scope: scope, $state: state});
    }));
});