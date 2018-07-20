(function() {
    'use strict';
    var gulp = require('gulp'),
        less = require('gulp-less'),
        rename = require('gulp-rename'),
        minifycss = require('gulp-minify-css'),
        autoprefixer = require('gulp-autoprefixer'),
        uglify = require('gulp-uglify'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish'),
        notify = require('gulp-notify'),
        plumber = require('gulp-plumber'),
        htmlclean = require('gulp-htmlclean'),
        htmlmin = require('gulp-htmlmin'),
        rev = require('gulp-rev-append'),
        sequence = require('gulp-sequence'),
        path = require('path'),
        paths = {
            root: './',
            source: './themes/snippet/source/' //������ԭ�ļ�
        }

    /*====================================================
         ��������
    ====================================================*/

    // CSSԤ����
    gulp.task('less-task', function() {
        return gulp.src(paths.source + 'css/less/_style.less')
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(less())
        .pipe(rename({basename: "style"}))
        .pipe(gulp.dest(paths.source + 'css'))
        .pipe(notify({message: 'less compile complete'}));
    });

    // У��JS�﷨�ͷ��
    gulp.task('js-task', function() {
        return gulp.src(paths.source + 'js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest(paths.source + 'js/'))
        .pipe(notify({message: 'js compile complete'}));
    });

    // ��������-���⿪��ģʽ
    gulp.task('dev', function() {
        gulp.watch(paths.source + 'css/less/*.less', ['less-task']);
        gulp.watch(paths.source + 'js/*.js', ['js-task']);
    });


    /*====================================================
        ����ǰ���봦��
    ====================================================*/

    // ѹ������ css
    gulp.task('minify-css', function() {
        return gulp.src('./public/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 10 versions', 'Firefox >= 20', 'Opera >= 36', 'ie >= 9', 'Android >= 4.0', ],
            cascade: true, //�Ƿ�������ʽ
            remove: false //�Ƿ�ɾ������Ҫ��ǰ׺
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('./public'))
        .pipe(notify({message: 'css minify complete'}));
    });

    // ѹ������ js
    gulp.task('minify-js', function() {
        return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
        .pipe(notify({message: 'js minify complete'}));
    });

    // ѹ������ html
    gulp.task('minify-html', function() {
        return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
             removeComments: true, //���HTMLע��
             collapseWhitespace: true, //ѹ��HTML
             minifyJS: true, //ѹ��ҳ��JS
             minifyCSS: true, //ѹ��ҳ��CSS
             minifyURLs: true
        }))
        .pipe(gulp.dest('./public'));
    });
    
    // ��Ӱ汾��
    gulp.task('rev', function() {
        return gulp.src('./public/**/*.html')
        .pipe(rev())
        .pipe(gulp.dest('./public'));
    });

    // ͬ��ִ��task
    gulp.task('deploy',sequence(['minify-css','minify-js'],'rev','minify-html'));
    
    // ����ǰ���봦��
    gulp.task('default',['deploy'],function(e){
       console.log("[complete] please execute�� hexo d");
    })
})();