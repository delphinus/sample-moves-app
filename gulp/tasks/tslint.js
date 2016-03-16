const config = require('../config');
const gulp = require('gulp');
const handleErrors = require('./handleErrors');
const plumber = require('gulp-plumber');
const tslint = require('gulp-tslint');

gulp.task(
    'tslint',
    () => gulp.src(config.tslint.src)
        .on('error', handleErrors)
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(tslint(config.tslint.lint))
        .pipe(tslint.report(config.tslint.report))
);
