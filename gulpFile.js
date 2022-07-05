const{src,dest, series, parallel, watch} =require('gulp');
const GulpCleanCss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imgmin = require('gulp-imagemin')



let golbs ={
    html:"project/*.html",
    css: "project/css/*.css",
    js: "project/js/*.js",
    img: "project/img/*",
}

function htmlTask(){
    return src(golbs.html).pipe(htmlmin({collapseWhitespace:true,removeComments:true})).pipe(dest("dist"))
}


function cssTask(){
    return src(golbs.css).pipe(GulpCleanCss()).pipe(dest("dist/assets/css"))
}


function jsTask(){
    return src(golbs.js).pipe(terser()).pipe(dest("dist/assets/js"))
}


function imgTask(){
    return src(golbs.img).pipe(imgmin()).pipe(dest("dist/assets/img"))
}

function watchTask(){
    watch(golbs.html,htmlTask)
    watch(golbs.css,cssTask)
    watch(golbs.js,jsTask)
    watch(golbs.img,imgTask)
}


exports.html =htmlTask;
exports.css = cssTask;
exports.js =jsTask;
exports.img = imgTask;

exports.default = series( parallel(htmlTask,cssTask,jsTask,imgTask) ,watchTask)