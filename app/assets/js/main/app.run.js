(function(){
    angular.module('app.run', ['app.constans'])
        .run([
			'validator',
			'bootstrap3ElementModifier',
			'defaultErrorMessageResolver',
			function (validator, bootstrap3ElementModifier, defaultErrorMessageResolver) {
				validator.setValidElementStyling(false);
		        validator.setInvalidElementStyling(true);
		      	bootstrap3ElementModifier.enableValidationStateIcons(false);

		      	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
			      errorMessages['ngPatternEmail'] = 'Please enter a valid email address.';
			    })

			    // console.log(window.location.origin);

			    var path = window.location.origin + document.getElementById('base-app').getAttribute('href');

			    // console.log(path);

		      	defaultErrorMessageResolver.setI18nFileRootPath(path + 'assets/js/libs/auto-validate/lang');
		      	defaultErrorMessageResolver.setCulture('es-co');
		}]);
})();

