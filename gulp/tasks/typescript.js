const config = require('../config');
const buffer       = require('vinyl-buffer');
const gulp = require('gulp');
const handleErrors = require('./handleErrors');
const plumber = require('gulp-plumber');
const watchify = require('gulp-watchify');
const sourcemaps = require('gulp-sourcemaps');
const tsify = require('tsify');
const rename = require('gulp-rename');
const formatter = require('pretty-hrtime');
const gutil = require('gulp-util');

gulp.task(
    'typescript',
    watchify(watchify => {
        const time = process.hrtime();
        return gulp.src(config.ts.entry)
            .pipe(plumber({errorHandler: handleErrors}))
            .pipe(watchify({
                watch: config.watch.watching,
                entries: config.ts.entry,
                debug: true,
                setup: bundle => bundle.plugin(tsify, config.ts.options)
            }))
            .pipe(buffer())
            .pipe(rename(config.ts.bundle))
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(config.ts.dest))
            .on('end', () => {
                const taskTime = formatter(process.hrtime(time));
                gutil.log(
                    'Bundled',
                    gutil.colors.green(config.ts.bundle),
                    'in',
                    gutil.colors.magenta(taskTime)
                );
            });
    })
);
