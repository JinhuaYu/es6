import gulp from 'gulp'; // gulp
import gulpif from 'gulp-if'; // gulp if判断
import concat from 'gulp-concat'; // gulp 处理文件拼接
import webpack from 'webpack'; // webpack
import gulpWebpack from 'webpack-stream'; //
import named from 'vinyl-named'; // 文件命名
import livereload from 'gulp-livereload'; // 热更新 
import plumber from 'gulp-plumber';  // 处理文件信息流
import rename from 'gulp-rename'; // 文件重命名
import uglify from 'gulp-uglify'; // 文件压缩js css
import {log, colors} from 'gulp-util'; // 输出色彩
import args from './util/args';

gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle: function(){
        
      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }), null, (err, stats) => {
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    .pipe(uglify({compress:{properties:false}, output:{'quote_keys': true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch, livereload()))
})
