'use strict';

import listItemTpl from './list-item.html';
import ListItemController from './list-item.controller';

export default class ListItemComponent {
    constructor() {
        this.templateUrl = listItemTpl;

        this.controller = ListItemController;
	    this.bindings = {
		    contact: '<',
            onContactDelete: '&'
	    };
    }
}