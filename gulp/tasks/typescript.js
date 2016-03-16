const config = require('../config');
const buffer       = require('vinyl-buffer');
const gulp = require('gulp');
const handleErrors = require('./handleErrors');
const plumber = require('gulp-plumber');
const watchify = require('watchify');
const sourcemaps = require('gulp-sourcemaps');

gulp.task(
    'typescript',
    watchify((watchify) => {
        return gulp.src(config.ts.entry)
            .pipe(plumber({errorHandler: handleErrors}))
            .pipe(watchify({
                watch: config.watch.watching,
                entries: config.ts.entry,
                debug: true,
                setup: (bundle) => {
                    bundle.plugin(tsify, config.ts.options);
                }
            }))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(config.ts.dest));
    })
);
