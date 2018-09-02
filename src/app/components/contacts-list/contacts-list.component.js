'use strict';

import contactsListTpl from './contacts-list.html';
import ContactsListController from './contacts-list.controller';

export default class ContactsListComponent {
    constructor() {
        this.templateUrl = contactsListTpl;
        this.controller = ContactsListController;
    }
}