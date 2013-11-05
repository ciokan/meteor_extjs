Package.describe({
	summary: "Loads extjs 4.2.0 library"
});

Package.on_use(function (api){
	api.add_files('http://cdn.sencha.com/ext/gpl/4.2.0/resources/css/ext-all.css', 'client');
	api.add_files('http://cdn.sencha.com/ext/gpl/4.2.0/ext-all.js', 'client');
});