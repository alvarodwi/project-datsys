/* eslint-disable require-jsdoc */
const {src, dest, series, parallel} = require('gulp');
const rename = require('gulp-rename');
const del = require('del');
const fs = require('fs');
const zip = require('gulp-zip');
const log = require('fancy-log');
const exec = require('child_process').exec;

const paths = {
  bin_folder: '../bin',
  server_file_name: './server.bundle.js',
  prod_package_json: './production.package.json',
  vue_src: '../client/dist/**/*',
  vue_dist: '../bin/views',
  zipped_file_name: 'project-datsys.zip',
};

function clean() {
  log('removing the old files in the directory');
  return del('../bin/**', {force: true});
}

function createBinFolder() {
  const dir = paths.bin_folder;
  log(`Creating the folder if not exist  ${dir}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    log('📁  folder created:', dir);
  }

  return Promise.resolve('the value is ignored');
}

function buildVueCodeTask(cb) {
  log('building Vue code into the directory');
  return exec('cd ../client && npm run build', function(err, stdout, stderr) {
    log(stdout);
    log(stderr);
    cb(err);
  });
}

function copyVueCodeTask() {
  log('copying Vue code into the directory');
  return src(`${paths.vue_src}`)
      .pipe(dest(`${paths.vue_dist}`));
}

function buildNodeJsCodeTask(cb) {
  log('building Node JS code into the directory');
  return exec('npm run build', function(err, stdout, stderr) {
    log(stdout);
    log(stderr);
    cb(err);
  });
}

function copyNodeJSCodeTask() {
  log('copying server code into the directory');
  return src(`${paths.server_file_name}`)
      .pipe(dest(`${paths.bin_folder}`));
}

function copyPackageJsonTask() {
  log('copying package json to use for production');
  return src(`${paths.prod_package_json}`)
      .pipe(rename('package.json'))
      .pipe(dest(`${paths.bin_folder}`));
}

function zippingTask() {
  log('zipping the code ');
  return src(`${paths.bin_folder}/**`)
      .pipe(zip(`${paths.zipped_file_name}`))
      .pipe(dest(`${paths.bin_folder}`));
}

exports.default = series(
    clean,
    createBinFolder,
    buildVueCodeTask,
    buildNodeJsCodeTask,
    parallel(copyVueCodeTask, copyNodeJSCodeTask, copyPackageJsonTask),
    zippingTask,
);
