require.config({
	map: {
		'*': {
			'css': 'require/css/css',
			'less': 'require/less/less',
			'text': 'require/2.1.5/text'
		},
		'require/less': {
			'require-css': 'require/css'
		}
	},
	
	paths: {
		'app': '../app',
		'style': '../../style'
	}
});