'use strict';

import contactsListModule from './components/contacts-list/contacts-list.module';
import contactFormModule from './components/contact-form/contact-form.module';
import headerModule from './components/header/header.module';
import searchModule from './components/search/search.module';
import listItemModule from './components/list-item/list-item.module';

export default angular.module('index.components', [
	contactsListModule.name,
	contactFormModule.name,
	headerModule.name,
	searchModule.name,
	listItemModule.name
]);
