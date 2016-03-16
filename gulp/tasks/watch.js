const config = require('../config');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');

gulp.task(
    'enable-watch-mode',
    (cb) => {
        config.watch.watching = true;
        return cb();
    }
);

gulp.task(
    'watchify',
    () => runSequence('enable-watch-mode', 'clean', 'typescript')
);

gulp.task(
    'build',
    () => runSequence('clean', 'typescript')
);

gulp.task(
    'watch',
    ['watchify'],
    () => watch(config.watch.ts, () => gulp.start(['tslint']))
);
