{
	appDir: '../www',
	baseUrl: 'js/lib',
	dir: '../www-built',
	keepBuildDir: false,
	mainConfigFile: '../www/js/lib/config.js',
	findNestedDependencies: false,
	optimize: "none",
	skipDirOptimize: true,
	modules: [
  	    {
  	    	name: 'app/module1',
  	    	include: ['less!style/style1'],
  	    	excludeShallow: ['require/css/css-builder', 'require/less/lessc-server', 'require/less/lessc']
  	    }
  	]
	
}