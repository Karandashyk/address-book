'use strict';

import contactsServiceModule from '../../index.services';
import ContactsListComponent from './contacts-list.component';
import './contacts-list.scss';

const contactsListModule = angular.module('contacts-list-module', [contactsServiceModule.name]);

contactsListModule
    .component('contactsList', new ContactsListComponent());

export default contactsListModule;
