const config = require('../config');
const del = require('del');
const gulp = require('gulp');

gulp.task('clean', (cb) => del(config.clean.js, cb));
