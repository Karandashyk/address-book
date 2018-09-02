'use strict';

import searchTpl from './search.html';
import SearchController from './search.controller';

export default class SearchComponent {
    constructor() {
        this.templateUrl = searchTpl;
        this.controller = SearchController;
        this.bindings = {
            query: '<',
	        onQueryChange: '&'
        };
    }
}