import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动服务器
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();

    var server = liveserver.new(['--harmony','server/bin/www']);//创建服务器
    server.start();

    //对js文件 和 模板文件监听
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);//把文件改动通知服务器做相应动作
    })
    
    //监听需要重启服务的文件(路由改变 和接口改变)
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });
})