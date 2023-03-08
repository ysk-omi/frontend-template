const config = require('../config').ejs;
const $ = require('../plugins');
const fs = require('fs');

const task = function (done) {
  let isProd = process.env.NODE_ENV === 'production' ? true : false;
  let stream = $.gulp
    .src(config.src)
    .pipe($.plumber())
    .pipe($.ejs({}, {}).on('error', $.log))
    .pipe($.rename({ extname: '.html' }))
    .pipe(
      $.htmlMinifier({
        removeComments: true,
        collapseWhitespace: true
      })
    )
    .pipe($.gulp.dest(config.dist));

  done();

  return stream;
};

$.gulp.task('ejs', task);
