import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp语句判断
import concat from 'gulp-concat';//用于gulp拼接
import webpack from 'webpack';//打包
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';//文件重命名标记
import livereload from 'gulp-livereload';//热更新
import plumber from 'gulp-plumber';//文件信息流 管道拼接
import rename from 'gulp-rename';//文件重命名
import uglify from 'gulp-uglify';//js压缩
import {log,colors} from 'gulp-util';//命令行工具输出 和色彩的输出
import args from './util/args';//命令行参数解析

//创建任务
gulp.task('scripts',()=>{
    //打开目录
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandle: function(){//处理错误逻辑

            }
        }))
        //文件重命名
        .pipe(named())
        //js编译
        .pipe(gulpWebpack({
            // module: {
            //     loaders: [{
            //         test:/\.js$/,
            //         loader: 'babel'
            //     }]
            // }
            module: {
                rules: [{
                    test:/\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }),null,(err,stats)=>{//编译失败的处理
            log(`Finshed '${colors.cyan('script')}'`,stats.toString({
                chunks:false
            }))
        })
        //存放路径
        .pipe(gulp.dest('server/pulic/js'))
        //编译压缩(重新复制一份)
        .pipe(rename({
            basename:'cp',
            extname:'min.js'
        }))
        //压缩
        .pipe(uglify({
            compress:{properties:false},
            output: {'quote_keys':true}
        }))
        .pipe(gulp.dest('server/pulic/js'))
        //监听文件变化自动刷新
        .pipe(gulpif(args.watch,livereload()))
})

