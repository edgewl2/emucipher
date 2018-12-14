import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import del from 'del';

const paths = {
    // html: {
    //     src: './src/**/*.html',
    //     dest: './build/src',
    //     watch: './src/**/*.html',
    // },
    // main: {
    //     src: './src',
    //     dest: './build'
    // },
    styles: {
        src: './src/assets/scss/style.scss',
        dest: './src/assets/css',
        watch: './src/assets/scss/**/*.scss'
    },
    // scripts: {
    //     src: './src/**/*.js',
    //     dest: './build/src',
    //     watch: './src/**/*.js',
    // },
    // packages: {
    //     src: './*.json'
    // },
};

export const clean = () => del([ paths.styles.dest ]);

export function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass({
            includePaths: [
                './node_modules',
                '../node_modules',
            ],
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest))
}

// export function scripts () {
//     return gulp.src(paths.scripts.src, {sourcemaps: false})
//         .pipe(babel())
//         .pipe(gulp.dest(paths.scripts.dest))
// }
//
// export function markups () {
//     return gulp.src(paths.html.src)
//         .pipe(gulp.dest(paths.html.dest))
// }
//
// export function packages () {
//     return gulp.src(['./package.json'])
//         .pipe(gulp.dest(paths.main.dest))
// }

function watch() {
    gulp.watch(paths.styles.watch, styles);
    // gulp.watch(paths.scripts.watch, scripts);
    // gulp.watch(paths.html.watch, markups);
    // gulp.watch(paths.packages.src, packages);
}

const build = gulp.series(clean, gulp.parallel(styles));
//, scripts, markups, packages));
export { build };

const dev = gulp.series(build, gulp.parallel(watch));
export { dev }