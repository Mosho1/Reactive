const gulp = require('gulp');
const path = require('path');
const replace = require('gulp-replace');
const watch = require('gulp-watch');
const chalk = require('chalk');
// const sass = require('gulp-sass');
// const stylus = require('gulp-stylus'	);
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
var liveServer = require("live-server");
 
var params = {
    wait: 400 // Waits for all changes, before reloading. Defaults to 0 sec. 
};


const getRelativePath = abspath => path.relative(__dirname, abspath).split('.')[0].replace(/\\/g, '/');

class Builder {

	constructor(args) {
		Object.assign(this, args);
		const msg = `${chalk.bold.green('builder')} created from ${chalk.gray(args.from)} to ${chalk.gray(args.to)}`;
		console.log(msg);
	}

	log(p) {
		const msg = `\t${chalk.cyan('building')} ${p}`;
		console.log(msg);
	}

	src(p) {
		return gulp.src(p).pipe(plumber());
	}

	scss({path: p}) {

		this.log(getRelativePath(p));

		const header = '$path-to-images: ""; $path-to-fonts: ""; $lang: "en";@import "' + path.join(__dirname, 'styles/_sprites/_sprite') + '";@import "' + path.join(__dirname, 'styles/utilities') + '";@import "' + path.join(__dirname, 'styles/components') + '";';
		this.src(p)
			.pipe(replace(/^/, header))
			.pipe(sass())
			.pipe(gulp.dest(path.dirname(p).replace(this.from, this.to)));
	}

	stylus({path: p}) {

		this.log(getRelativePath(p));

		this.src(p)
			.pipe(stylus())
			.pipe(gulp.dest(path.dirname(p).replace(this.from, this.to)));
	}

	esnext({path: p}) {

		this.log(getRelativePath(p));
		this.src(p)
			.pipe(babel({
				'stage': 0,
				'blacklist': [],
				'optional': []
			}))
			.pipe(gulp.dest(path.dirname(p).replace(this.from, this.to)));
	}

	watch() {
		watch([`${this.from}/**/*.js`], f => this.esnext(f));
	}

	build() {
		gulp.src(`${this.from}/**/*.js`).pipe(gutil.buffer((err, files) =>
			files.forEach(f => this.esnext(f))));
	}
}

const builder = new Builder({from: 'src', to: 'build'});

gulp.task('build', () => builder.build());
gulp.task('default', () => {
	builder.watch();
	liveServer.start(params);
})