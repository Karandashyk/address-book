'use strict';

import config from './index.config';

import uiRouter from '@uirouter/angularjs';

import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';
import indexServices from './index.services'
import indexDirectives from './index.directives'

const App = angular.module(
  "AddressBook", [
    // plugins
    uiRouter,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    mainModule.name,

	// services
	indexServices.name,

    // directives
    indexDirectives.name
  ]
);

App
  .config(config);



export default App;
