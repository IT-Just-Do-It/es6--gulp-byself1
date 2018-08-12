import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';//函数集合
import livereload from 'gulp-livereload';//热更新
import args from './util/args';

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts']);//监听app下所有js文件，启动script脚本
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);

});