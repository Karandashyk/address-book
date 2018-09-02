'use strict';

import contactFormTpl from './contact-form.html';
import ContactFormController from './contact-form.controller';

export default class ContactFormComponent {
    constructor() {
        this.templateUrl = contactFormTpl;
        this.controller = ContactFormController;
    }
}