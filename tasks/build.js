import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';//将其它构建脚本按照顺序串联起来的包

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));//serve一定放最后
