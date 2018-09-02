'use strict';

const validatorDirectivesModule = angular.module('validator-directive-module', []);

validatorDirectivesModule
	.directive('email', function() {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

				ctrl.$validators.email = function(modelValue, viewValue) {
					if (EMAIL_REGEXP.test(viewValue)) {
						return true;
					}

					return false;
				};
			}
		};
	});


export default validatorDirectivesModule;
