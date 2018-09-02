'use strict';

import validatorDirectivesModule from './directives/validators.directive';

export default angular
	.module('index.directives', [
		validatorDirectivesModule.name
	]);

