'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var copyComponents = function () {
    return gulp.src([
        path.join(conf.paths.lib.components, '/**/*.js'),
        path.join(conf.paths.lib.components, '/**/*.html'),
        path.join(conf.paths.lib.components, '/**/*.scss')
    ]).pipe(gulp.dest(path.join(conf.paths.src, '/app/components/copied')));
};

var copyDirectives = function () {
    return gulp.src([
        path.join(conf.paths.lib.directives, '/**/*.js'),
        path.join(conf.paths.lib.directives, '/**/*.html'),
        path.join(conf.paths.lib.directives, '/**/*.scss')
    ]).pipe(gulp.dest(path.join(conf.paths.src, '/app/directives/copied')));
};

var copyFilters = function () {
    return gulp.src([
        path.join(conf.paths.lib.filters, '/**/*.js'),
        path.join(conf.paths.lib.filters, '/**/*.html'),
        path.join(conf.paths.lib.filters, '/**/*.scss')
    ]).pipe(gulp.dest(path.join(conf.paths.src, '/app/filters/copied')));
};

var copyProviders = function () {
    return gulp.src([
        path.join(conf.paths.lib.providers, '/**/*.js'),
        path.join(conf.paths.lib.providers, '/**/*.html'),
        path.join(conf.paths.lib.providers, '/**/*.scss')
    ]).pipe(gulp.dest(path.join(conf.paths.src, '/app/providers/copied')));
};

var copyServices = function () {
    return gulp.src([
        path.join(conf.paths.lib.services, '/**/*.js'),
        path.join(conf.paths.lib.services, '/**/*.html'),
        path.join(conf.paths.lib.services, '/**/*.scss')
    ]).pipe(gulp.dest(path.join(conf.paths.src, '/app/services/copied')));
};

gulp.task('copy-global', function (done) {
    Promise.all([
        copyComponents(),
        copyDirectives(),
        copyFilters(),
        copyProviders(),
        copyServices()
    ]).then(function () {
        done();
    });
});