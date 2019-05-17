(function(){
    angular.module('app.directives', [])
        .directive('appNavbar', [function(){
            return {
                restrict: 'E'
                , templateUrl: 'templates/partials/navbar.tpl.html'
            }
        }])
        .directive('appFooter', [function(){
            return {
                restrict: 'E'
                , templateUrl: 'templates/partials/footer.tpl.html'
            }
        }])
        .directive('routerLink', ['$route', function($route){
            return {
                restrict: 'A'
                , link: function(scope, elem, attr, ctrl) {
                    var routerLink = attr.routerLink;

                    elem.children('a').attr('href', '.' + routerLink);

                    scope.$watch(
                        function(){
                            return $route.current;
                        }
                        , function(newValue){
                            if(!newValue){
                                return false;
                            }

                            if(newValue.$$route.originalPath === routerLink){
                                elem.parents('ul.nav.navbar-nav')
                                    .children('li')
                                    .removeClass('active');

                                elem.addClass('active');
                            }
                        }
                    );
                }
            }
        }])
})();