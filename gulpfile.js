// Dependencies
var gulp          = require( 'gulp' ),
		gulp_css_nano = require( 'gulp-cssnano' ),
		gulp_rename   = require( 'gulp-rename' ),
		gulp_concat		= require( 'gulp-concat' ),
		gulp_uglify		= require( 'gulp-uglify' );

// CSS task
gulp.task( 'css', function(){
	return gulp.src( './src/styles/' + process.argv[4] )    // Get url of the main CSS file
		.pipe( gulp_css_nano() )                // Minify it
		.pipe( gulp_rename( 'style.min.css' ) ) // Rename it
		.pipe( gulp.dest( './src/styles/' ) );     // Put it in folder if doesn't exist it will creat it
} );

// JS task
gulp.task( 'js', function(){
	return gulp.src( './src/scripts/' + process.argv[4] )
		.pipe( gulp_concat( 'main.min.js' ) )
		.pipe( gulp_uglify() )
		.pipe( gulp.dest( './src/scripts/' ) );
} );

// Watch task
gulp.task( 'watch', function()
{
    // Watch for CSS modifications
    gulp.watch( './src/css/style.css', [ 'css' ] );

    // Watch for JS modifications (but not for script.min.js)
    gulp.watch( [ './src/js/**', '!./src/js/script.min.js' ], [ 'js' ] );
} );