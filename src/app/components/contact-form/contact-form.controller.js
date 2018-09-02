'use strict';

export default class ContactFormController {
	constructor($stateParams, contactsService, $scope, $state) {
		'ngInject';
		this.$state = $state;
		this.$scope = $scope;
		this.contactId = $stateParams.itemId;
		this.contact = {};
		this.$scope.forms = {};
		this.contactsService = contactsService;
		this.status = 'loading';
		this.text = 'Address Book | Edit contact';
	}

	$onInit() {
		if (this.contactId) {
			this.contactsService.getContact(this.contactId)
				.then(data => {
					this.contact = data;
					this.status = 'loaded';
					this.$scope.$apply();
				})
				.catch(() => {
					this.status = 'error';
				});
		} else {
			this.text = 'Address Book | New contact';
			this.status = 'loaded';
		}
	}

	saveContact() {
		if (this.$scope.forms.contactForm.$invalid) return;

		this.contactsService.setContact(this.contactId, this.contact)
			.then(() => {
				this.$state.go('contacts');
			})
			.catch(() => {
				this.status = 'error';
			});
	}

	removeContact() {
		this.contactsService.removeContact(this.contactId)
			.then(() => {
				this.$state.go('contacts')
			})
			.catch(() => {
				this.status = 'error';
			});
	}
}