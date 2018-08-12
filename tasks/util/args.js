import yargs from 'yargs';

//区分 开发环境和线上环境 配置
const args = yargs

    .option('production',{
        boolean:true, //类型
        default:false,//默认开发环境
        describe:'min all scripts'
    })
    //监听开发环境 文件改变
    .option('watch',{
        boolean:true,
        default:false,
        describe:'watch all files'
    })
    //是否 详细输入命令行日志输出
    .option('verbose',{
        boolean:true,
        default:false,
        describe:'log'
    })
    //文件压缩映射配置(强制生成)
    .option('sourcemaps',{
        describe: 'force the creation of sourcemaps'
    })
    //设置服务器端口
    .option('port',{
        string:true,
        default:8080,
        describe:'server port'
    })
    
    //对输入的命令行以字符串作为解析
    .argv