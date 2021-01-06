require('./bootstrap');

window.Vue = require('vue');

const admin = new Vue({
    el: '#admin',
	data: {
		test: "Testing for Admin",
	}
});