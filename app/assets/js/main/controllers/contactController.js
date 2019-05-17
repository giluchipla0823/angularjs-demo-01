(function(){
    angular.module('contact.controllers', [])
        .controller('ContactController', [function(){
            var vm = this;

            vm.form = {
                data: {}
            };
        }]);
})();