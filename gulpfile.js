var gulp         = require('gulp'),
	sass         = require('gulp-sass')
	uglify       = require("gulp-uglify"),
	autoprefixer = require("gulp-autoprefixer"),
	cleancss     = require("gulp-clean-css"),
	browserSync  = require("browser-sync"),
	concat       = require("gulp-concat"),
	imagemin     = require("gulp-imagemin"),
	rename       = require("gulp-rename"),
	notify       = require("gulp-notify"),
	plumber      = require("gulp-plumber")


gulp.task("sass", function(){
	return gulp.src('app/sass/main.sass')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass().on("error",sass.logError))
		.pipe(autoprefixer(["last 15 version", "> 1%", "ie 8", "ie 7"]))
		.pipe(cleancss())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.stream());
});

gulp.task("scripts", function(){
	return gulp.src([
		"app/libs/jquery/dist/jquery.min.js",
		"app/libs/page-scroll-to-id/jquery.malihu.PageScroll2id.js",
		"app/libs/jquery-nice-select/js/jquery.nice-select.min.js",
		"app/libs/fancybox/dist/jquery.fancybox.min.js",
		"app/libs/slick-carousel/slick/slick.min.js"
		])

	.pipe(concat("libs.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("app/js"));	
})

gulp.task("img", function(){
	return gulp.src("app/img/**/*")
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
			svgoPlugins: [{removeViewBox: true}]
		}))
		.pipe(gulp.dest("build/img"));
});

gulp.task('serve', ["sass", "scripts"], function() {

	browserSync.init({
		server: "app"
	});

	gulp.watch("app/sass/*.sass", ['sass']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
	gulp.watch("app/js/*.js").on('change', browserSync.reload);
});


gulp.task("build", [ "img", "sass", "scripts"], function(){
	var buildCss = gulp.src([
			"app/css/main.min.css",
			"app/css/ajax-loader.gif"
		])
	.pipe(gulp.dest("build/css"));

	var buildFonts = gulp.src("app/fonts/**/*")
		.pipe(gulp.dest("build/fonts"));

	var buildJs = gulp.src("app/js/**/*")
	.pipe(gulp.dest("build/js"));

	var buildHtml = gulp.src("app/*.html")
		.pipe(gulp.dest("build"));	
});

gulp.task('default', ['serve']);



