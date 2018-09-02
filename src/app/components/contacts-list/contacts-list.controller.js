'use strict';

export default class ContactsListController {
	constructor(contactsService, $scope, $state) {
		'ngInject';
		this.$scope = $scope;
		this.$state = $state;
		this.contactsService = contactsService;
		this.contacts = {};
		this.query = '';
		this.countPerPage = 5;
		this.currentPage = 1;
		this.status = 'loading';
	}

	$onInit() {
		this.getContacts();
	}

	getContacts() {
		const params = {
			query: this.query
		};

		this.contactsService.getContacts(params)
			.then(data => {
				this.contacts = data;
				this.status = 'loaded';
				this.$scope.$apply();
			})
			.catch(() => {
				this.status = 'error';
			})
	}

	onQueryChange(search) {
		this.status = 'loading';
		this.currentPage = 1;
		this.query = search;
		this.getContacts();
	}

	loadMore() {
		this.currentPage++;
	}

	isLoadMoreVisible() {
		return Object.keys(this.contacts).length > this.countPerPage * this.currentPage;
	}

	onContactDelete() {
		this.currentPage = 1;
		this.getContacts();
	}
}