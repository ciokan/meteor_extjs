Package.describe({
	summary: "Loads extjs 4.2.0 library"
});

Package.on_use(function (api){
	api.add_files('ext-all.js', 'client');
	api.add_files('ext-all.css', 'client');
});