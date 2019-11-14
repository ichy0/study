'use strict';

import "../index.js";

$('.myplugin-button').myplugin({
	target: '.myplugin-target',
	addClass: 'is-active'
});

$('.myplugin-button2').myplugin({
	target: '.myplugin-target2',
	addClass: 'is-active',
	fade: true
});