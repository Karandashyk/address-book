'use strict';

import ListItemComponent from './list-item.component';
import './list-item.scss';

const listItemModule = angular.module('list-item-module', []);

listItemModule
    .component('listItem', new ListItemComponent());

export default listItemModule;
