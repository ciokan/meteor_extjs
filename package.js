Package.describe({
	summary: "Loads extjs 4.2.0 library"
});

Package.on_use(function (api){
	if (api.export) {
		api.export('mextjs');
	}
	api.add_files('ext-all.js', 'client', {
		raw: true
	});
	api.add_files('ext-all.css', 'client');
});