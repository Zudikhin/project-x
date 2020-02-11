const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const rename = require('gulp-rename');
const browserSync = require("browser-sync").create();

gulp.task('autoprefixer', function () {
  return gulp
    .src("app/css/*.css")
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest("app/css/"));
})

gulp.task("scss", function () {
  return gulp
    .src("app/scss/style.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest("app/css/"))
    .pipe(browserSync.stream());
});

gulp.task("html", function () {
  return gulp.src("app/*.html")
    .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
  return gulp
    .src("app/build/main.js")
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest("app/js/"))
    .pipe(browserSync.stream());
})

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
});

gulp.task("watch", function () {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("app/*.html", gulp.parallel("html"));
  gulp.watch("app/build/*.js", gulp.parallel("scripts"));
});

gulp.task("default", gulp.parallel("browser-sync", "watch"));