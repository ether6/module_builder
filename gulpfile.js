var gulp   = require('gulp');
var argv = require('yargs').argv;
var rename = require("gulp-rename");
var replace = require("gulp-replace");
var files;

gulp.task('mkModule', function() {
	// copy any html files in source/ to public/
	switch(argv.comp) {
		case 'module':
		case 'mod':
			files = ['module/myModuleName.module.js', 'module/myModuleName.module.spec.js'];
			break;
		case 'factory':
		case 'fac':
			files = ['module/myModuleNameFactory.js', 'module/myModuleNameFactory.spec.js'];
			break;
		case 'service':
		case 'ser':
			files = ['module/myModuleNameService.js', 'module/myModuleNameService.spec.js'];
			break;
		case 'controller':
		case 'con':
			files = ['module/myModuleNameController.js', 'module/myModuleNameController.spec.js'];
			break;
		case 'directive':
		case 'dir':
			files = ['module/myModuleName.js', 'module/myModuleName.spec.js'];
			break;
		case 'template':
		case 'tem':
			files = ['module/myModuleName.tpl.html'];
			break;
		case 'less':
		case 'les':
			files = ['module/myModuleName.less'];
			break;
		default:
			files = ['module/*'];
	}

	if(argv.dest)
		gulp.src(files)
		.pipe(replace('<myModuleName>', argv.name))
		.pipe(replace('my-module-name', argv.name))
		.pipe(rename(function(path) {
			if(argv.name)
				path.basename = path.basename.replace('myModuleName', argv.name);
		}))
		.pipe(gulp.dest(argv.dest));
});