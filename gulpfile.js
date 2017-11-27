/******************************************************
 *      @author elsewares < hi@elsewares.org >        *
 ******************************************************/

// import package
const $ = require('gulp-load-plugins')(),
	webpack = require('webpack-stream'),
	named = require('vinyl-named'),
	gulp = require('gulp');


// CSS TASK
gulp.task('css', function() {
	gulp.src('./scss/*.scss').pipe($.sass()).pipe($.autoprefixer('last 10 version')).pipe(gulp.dest('./'));
});

// JS TASK
gulp.task('js', function() {
	var webpack_config = {
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel',
					query: {
						presets: [
							'es2015', 'stage-3'
						],
						plugins: ['transform-runtime']
					}
				}, {
					test: /\.css$/,
					loaders: ['style', 'css']
				}, {
					test: /\.json$/,
					loaders: ['json']
				}, {
					test: /\.(scss|sass)$/,
					loaders: ['style', 'sass']
				}, {
					test: /\.(html|tpl)$/,
					loaders: ['html']
				}, {
					test: /\.vue$/,
					loaders: ['vue']
				}
			]
		}
	};

	gulp.src('./example/demo.js').pipe($.plumber({errorHandler: _errorHandler})).pipe(named(function() {
		return 'demo-src';
	})).pipe(webpack(webpack_config)).pipe($.uglify()).pipe(gulp.dest('./example'));

	gulp.src('./example-2/demo.js').pipe($.plumber({errorHandler: _errorHandler})).pipe(named(function() {
		return 'demo-src';
	})).pipe(webpack(webpack_config)).pipe($.uglify()).pipe(gulp.dest('./example-2'));

});

// DEVELOPMENT SERVE TASK
gulp.task('serve', function() {
	gulp.watch([
		'./example/demo.js', './example-2/demo.js', './*.vue', './scss/*.scss'
	], ['js']);
	gulp.watch(['./scss/*.scss'], ['css']);
});

// BUILD TASK
gulp.task('build', ['js', 'css']);
gulp.task('default', ['build']);


// PRIVATE FUNCTIONS
function _errorHandler(e) {
	$.util.beep();
	$.util.log(e);
}
