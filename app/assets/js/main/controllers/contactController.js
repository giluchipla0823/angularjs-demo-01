(function(){
    angular.module('contact.controllers', [])
        .controller('TemplateValidationController', [function(){
            var vm = this;

            vm.form = {
                data: {}
            };
        }])
        .controller('PluginValidationController', [function(){
            var vm = this;

            vm.form = {
                data: {}
            };

            vm.save = function(){
                console.log('SUBMIT FORM');
            }
        }]);
})();