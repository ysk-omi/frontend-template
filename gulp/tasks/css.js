const config = require('../config').css;
const $ = require('../plugins');
// const packageImporter = require('node-sass-package-importer')

const task = function (done) {
  let isProd = process.env.NODE_ENV === 'production' ? true : false;

  const processors = [$.autoprefixer()];
  const includePaths = [...config.importModules, 'src/scss'];

  if (isProd) {
    processors.push($.csswring());
  }

  let stream = $.gulp
    .src(config.src)
    .pipe(
      $.plumber({
        errorHandler: function (err) {
          console.log(err.messageFormatted);
          this.emit('end');
        }
      })
    )
    .pipe($.sassGlob())
    .pipe($.gulpif(!isProd, $.sourcemaps.init()))
    .pipe(
      $.sass({
        outputStyle: 'expanded',
        includePaths: includePaths
        // importer: packageImporter({
        //     extensions: ['.scss', '.css'],
        // }),
      })
    )
    .pipe($.postcss(processors))
    .pipe($.gulpif(!isProd, $.sourcemaps.write(`../maps`)))
    .pipe($.gulp.dest(config.dist))
    .pipe($.browserSync.stream());

  done();

  return stream;
};

$.gulp.task('css', task);
