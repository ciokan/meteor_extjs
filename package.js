Package.describe({
	summary: "Loads extjs 4.2.0 library"
});

Package.on_use(function (api){
	api.add_files(['resources/ext-all.css', 'resources/ext-all.js'], 'client');
});