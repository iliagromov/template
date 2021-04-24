const gulp = require('gulp');

// ===============================================
// Task clear
// ===============================================
const clear = require('./gulp/gulp.task.clear');


// ===============================================
// Tasks static
// ===============================================
const static = require('./gulp/gulp.task.static');


// ===============================================
// Tasks html
// ===============================================
const pug2html = require('./gulp/gulp.task.pug2html');

// ===============================================
// Tasks styles
// ===============================================
const styles = require('./gulp/gulp.task.styles');

// ===============================================
// Tasks grid
// ===============================================
const grid = require('./gulp/gulp.task.smartgrid');


// ===============================================
// Tasks scripts
// ===============================================
const script = require('./gulp/gulp.task.scripts');

// ===============================================
// Tasks
// ===============================================

gulp.task('build', gulp.parallel('htmlBuild', 'styles', 'scripts'));

// ===============================================
// Tasks watch
// ===============================================
const watch = require('./gulp/gulp.task.watch');

const path = require('./path.json');
const svgSprite = require('gulp-svg-sprite');

 // Basic configuration example
 let config = {
    mode: {
      css: { // Activate the «css» mode
        render: {
          css: true // Activate CSS output (with default options)
        }
      }
    }
  };
gulp.task('spriteSVG', function () {
	return gulp.src('./src/assets/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest(path.src + path.sprite + 'svg'));
})