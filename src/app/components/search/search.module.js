'use strict';

import SearchComponent from './search.component';
import './search.scss';

const searchModule = angular.module('search-module', []);

searchModule
    .component('search', new SearchComponent());

export default searchModule;
