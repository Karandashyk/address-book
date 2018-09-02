'use strict';

const contactsServiceModule = angular.module('contacts-service-module', []);

contactsServiceModule
	.service('$firebase', function() {
		return window.firebase;
	})
	.factory("contactsService",
		function($firebase) {

			let ref = $firebase.database().ref('/contacts');

			function getContacts(params) {
				params = params || {query: ''};
				return new Promise(function(resolve) {
					ref.orderByChild('name')
						.startAt(params.query)
						.endAt(`${params.query}\uf8ff`)
						.once("value", function(snapshot) {
						resolve(_.map(snapshot.val(), (item, key) =>
							({
								name: item.name,
								email: item.email,
								id: key
							})
						));
					});
				})
			}

			function setContact(id, contact) {
				if (id) {
					const contactItem = firebase.database().ref('contacts/' + id);
					return contactItem.update(contact);
				}

				return new Promise(resolve => {
					const newContact = ref.push();

					resolve(newContact.set(contact));
				})
			}

			function getContact(id) {
				return getContacts().then(data => _.find(data, {id: id}));
			}

			function removeContact(id) {
				const contactItem = firebase.database().ref('contacts/' + id);
				return contactItem.remove();
			}

			return {
				getContacts: getContacts,
				getContact: getContact,
				setContact: setContact,
				removeContact: removeContact
			}

		}
	);

export default contactsServiceModule;
