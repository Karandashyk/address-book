'use strict';

import MainComponent from './main.component';

const mainPageModule = angular.module('main-module', [
    'ui.router'
])
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('contacts', {
                url: '/',
                component: 'contactsList'
            })
	        .state('add', {
		        url: '/add',
		        component: 'contactForm'
	        })
            .state('edit', {
                url: '/edit/:itemId',
                component: 'contactForm'
            });
    })
    .component('main', new MainComponent());

export default mainPageModule;
