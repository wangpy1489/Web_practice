var gulp=require("gulp");
//这里用到了webpack-stream 而不是webpack
// var webpack2=require('webpack2');
var webpack=require("webpack2-stream-watch");
var vinylName=require("vinyl-named");
var connect=require("gulp-connect");
var webpackConfig=require("./webpack.config.js");
//添加MD5戳
var rev=require("gulp-rev");
//替换原始文件中的js引用
var revCollect=require("gulp-rev-collector");
var clean=require("gulp-clean");
//路径配置
var path={
    dev:{
        html:"./src",
        js:"./src/js",
        component:"./components"
    },
    clean:"./build"
};
//清理
gulp.task("clean",function(){
    return gulp.src(path.clean+"/*.*")
    .pipe(clean());
});
//启用webpack,依赖clean
gulp.task("webpack",["clean"],function(){
    return gulp.src("./src/js/main.js")
    .pipe(vinylName())
    .pipe(webpack(webpackConfig))
    .pipe(rev())
    .pipe(gulp.dest("./build"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("./build"));
});
//更新html中旧的js引用
gulp.task("rev",["webpack"],function(){
    return gulp.src(["./build/*.json",path.dev.html+"/index.html"])
    .pipe(revCollect({
        replaceReved: true
    }))
    .pipe(gulp.dest("./"));
});
//创建服务器
gulp.task("connect",function(){
    connect.server({
        root:"./",
        livereload:true
    });
});
//reload操作
gulp.task("reload",["rev"],function(){
    gulp.src(path.dev.js+"/*.js").pipe(connect.reload());
    gulp.src(path.dev.html+"./index.html").pipe(connect.reload());
    gulp.src(path.dev.component+"./**.vue").pipe(connect.reload());
});
//watch js html 组件 三者的改变 起到自动刷新的作用
gulp.task("watch",function(){
    gulp.watch(path.dev.js+"/*.js",["rev","reload"]);
    gulp.watch(path.dev.html+"/index.html",["rev","reload"]);
    gulp.watch(path.dev.component+"/*.vue",["webpack","rev","reload"]);
});

gulp.task("default",["webpack","connect","rev","watch"]);