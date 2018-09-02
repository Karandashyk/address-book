/*global NODE_ENV*/
'use strict';

function config($logProvider, $compileProvider) {
	'ngInject';

    $logProvider.debugEnabled(true);

    if (NODE_ENV === 'production') {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }

	let fireBaseConfig = {
		apiKey: "AIzaSyBkZzncRN3DcLgJoK-7Hx-qqR6r5idgQEw",
		authDomain: "addressbook-27e91.firebaseapp.com",
		databaseURL: "https://addressbook-27e91.firebaseio.com",
		projectId: "addressbook-27e91",
		storageBucket: "addressbook-27e91.appspot.com",
		messagingSenderId: "854783822170"
	};

	window.firebase.initializeApp(fireBaseConfig);
}

export default config;
