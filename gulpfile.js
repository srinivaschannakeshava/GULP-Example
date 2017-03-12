const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const useref=require('gulp-useref');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');

// compression of image for more features look into gulp-imagemin lib
gulp.task('imagemin', function() {
    var imageSrc = 'src/images/**/*';
    var imageDest = 'dest/images';
    gulp.src(imageSrc)
        .pipe(imagemin())
        .pipe(gulp.dest(imageDest));
});

//minification of the css file
gulp.task('minify-css',function(){
    var cssSrc='src/css/*.css';
    var cssDest='dest/css';
    return gulp.src(cssSrc)
    .pipe(cleanCSS())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(cssDest));
});

//concatinating all the css or js files as defined in the html to a single file in order
gulp.task('useref',function(){
  return gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulp.dest('dest'));
})

//concatination combined with minification

gulp.task('mini-concat',function(){
  return gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulpif('*.js',uglify()))
  .pipe(gulpif('*.css',cssnano()))
  .pipe(gulp.dest('dest'));
});
