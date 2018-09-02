'use strict';

export default class ListItemController {
	constructor($state, contactsService) {
		'ngInject';
		this.$state = $state;
		this.contactsService = contactsService;

	}

	editContact(itemId) {
		this.$state.go('edit', {itemId: itemId})
	}

	removeContact($event) {
		this.contactsService.removeContact(this.contact.id)
			.then(() => {
				this.onContactDelete();
			})
	}
}