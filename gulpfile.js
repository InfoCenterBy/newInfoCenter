let project_folder = require('path').basename(__dirname);
let source_folder = '#src';

let fs = require('fs');

let path = {
     build: {
          html: project_folder + '/',
          css: project_folder + '/css/',
          js: project_folder + '/js/',
          img: project_folder + '/img/',
          fonts: project_folder + '/fonts/',
          audio: project_folder + '/audio/',
     },
     src: {
          html: [
               source_folder + '/**/*.html',
               '!' + source_folder + '/_*.html',
          ],
          css: source_folder + '/scss/**/*.scss',
          js: source_folder + '/js/**/*.js',
          img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
          fonts: source_folder + '/fonts/*.ttf',
          audio: source_folder + '/audio/*.mp3',
     },
     watch: {
          html: source_folder + '/**/*.html',
          css: source_folder + '/scss/**/**/*.scss',
          js: source_folder + '/js/**/*.js',
          img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
          audio: source_folder + '/audio/*.mp3',
     },
     clean: './' + project_folder + '/',
};

let { src, dest } = require('gulp'),
     gulp = require('gulp'),
     browsersync = require('browser-sync').create(),
     fileinclude = require('gulp-file-include'),
     del = require('del'),
     scss = require('gulp-sass')(require('sass')),
     autoprefixer = require('gulp-autoprefixer'),
     // group_media = require('gulp-group-css-media-queries'),
     clean_css = require('gulp-clean-css'),
     rename = require('gulp-rename'),
     uglify = require('gulp-uglify-es').default,
     imagemin = require('gulp-imagemin'),
     svgSprite = require('gulp-svg-sprite'),
     ttf2woff = require('gulp-ttf2woff'),
     ttf2woff2 = require('gulp-ttf2woff2'),
     fonter = require('gulp-fonter'),
     deploy = require('gulp-gh-pages'),
     strip = require('gulp-strip-comments');

function browserSync(done) {
     browsersync.init({
          server: {
               baseDir: './' + project_folder + '/',
          },
          notify: false,
     });
}

function html() {
     return src(path.src.html)
          .pipe(
               fileinclude({
                    context: {
                         link: 1,
                         aimList: [],
                         resultList: [],
                         taskList: [],
                         scriptList: [],
                         styleList: [],
                    },
               })
          )
          .pipe(strip())
          .pipe(
               rename(function (file) {
                    const pathParts = file.dirname.split(path.sep);

                    const hasExcludedFolder = pathParts.some(
                         (part) =>
                              part === 'html-comp' || part === 'html-elements'
                    );

                    if (!hasExcludedFolder) {
                         file.dirname = '';
                    }
               })
          )
          .pipe(dest(path.build.html))
          .pipe(browsersync.stream());
}

function css() {
     return (
          src(path.src.css)
               .pipe(
                    scss({
                         outputStyle: 'expanded',
                         errLogToConsole: true,
                    }).on('error', scss.logError)
               )
               // .pipe(group_media())
               .pipe(
                    autoprefixer({
                         overrideBrowserslist: ['last 5 versions'],
                         cascade: true,
                    })
               )
               .pipe(dest(path.build.css))
               // .pipe(clean_css())
               // .pipe(
               // 	rename({
               // 		extname: '.min.css',
               // 	})
               // )
               .pipe(dest(path.build.css))
               .pipe(browsersync.stream())
     );
}

function js() {
     return (
          src(path.src.js)
               .pipe(fileinclude())
               .pipe(dest(path.build.js))
               // .pipe(uglify())
               // .pipe(
               // 	rename({
               // 		extname: '.min.js',
               // 	})
               // )
               .pipe(dest(path.build.js))
               .pipe(browsersync.stream())
     );
}

function images() {
     return src(path.src.img)
          .pipe(
               imagemin({
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    // optimizationLevel: 3, // 0 to 7
               })
          )
          .pipe(dest(path.build.img))
          .pipe(browsersync.stream());
}

function audio() {
     return src(path.src.audio)
          .pipe(dest(path.build.audio))
          .pipe(browsersync.stream());
}

function fonts() {
     src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
     return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
}

gulp.task('otf2ttf', function () {
     return src([source_folder + '/fonts/*.otf'])
          .pipe(
               fonter({
                    formats: ['ttf'],
               })
          )
          .pipe(dest(source_folder + '/fonts/'));
});

gulp.task('svgSprite', function () {
     return gulp
          .src([source_folder + '/iconsprite/*.svg'])
          .pipe(
               svgSprite({
                    mode: {
                         stack: {
                              sprite: '../icons/icons.svg', //sprite file name
                              example: true,
                         },
                    },
               })
          )
          .pipe(dest(path.build.img));
});

gulp.task('deploy', function () {
     return gulp.src('./newiInfoCenter/**/*').pipe(deploy());
});

function watchFiles(params) {
     gulp.watch([path.watch.html], html);
     gulp.watch([path.watch.css], css);
     gulp.watch([path.watch.js], js);
     gulp.watch([path.watch.img], images);
     gulp.watch([path.watch.audio], audio);
}

function clean(params) {
     return del(path.clean);
}

let build = gulp.series(
     clean,
     gulp.parallel(js, css, html, images, fonts, audio)
);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.audio = audio;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
