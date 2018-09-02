'use strict';

import contactsService from './services/contacts.service';

export default angular
	.module('index.services', [
		contactsService.name
	]);

