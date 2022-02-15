const { src, series, parallel, dest, watch } = require(“gulp");

const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function compile() {
    return src("src/scss/main.scss", { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename("main.min.css"))
        .pipe(dest("dist/css", { sourcemaps: "." }));
}

function watcher() {
    watch(["*.html"], series(html, syncReload));
    watch(["src/img/*"], series(images, syncReload));
    watch(["src/scss/**/*.scss"], series(compile, syncReload));
}