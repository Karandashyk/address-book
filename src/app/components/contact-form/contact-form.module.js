'use strict';

import contactsServiceModule from '../../index.services';
import validatorDirectivesModule from '../../index.directives'
import ContactFormComponent from './contact-form.component';
import './contact-form.scss';

const contactFormModule = angular.module('contact-form-module',
	[
		contactsServiceModule.name,
		validatorDirectivesModule.name
	]);

contactFormModule
    .component('contactForm', new ContactFormComponent());

export default contactFormModule;
