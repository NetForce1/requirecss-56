define(function(require) {
	require('css');
	console.log('module1');
	
	require(['less!style/style1'], function() {
		console.log('async require for style1 finished!');
	});
});