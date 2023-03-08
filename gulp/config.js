const srcPath = 'src';
const distPath = 'dist';
const distAssetsPath = distPath + '/assets';

module.exports = {
  script: {
    src: `${srcPath}/js/**/*.js`,
    dist: `${distAssetsPath}/js/`,
    watch: [`${srcPath}/js/**/*.+(js|vert|frag|glsl)`, `${srcPath}/glsl/**/*.+(vert|frag|glsl)`]
  },
  ejs: {
    src: `${srcPath}/ejs/**/[!_]*.ejs`,
    dist: distPath,
    watch: [`${srcPath}/ejs/**/*.ejs`]
  },
  pug: {
    src: `${srcPath}/pug/**/[!_]*.pug`,
    dist: distPath,
    watch: `${srcPath}/pug/**/*.pug`
  },
  css: {
    src: `${srcPath}/scss/**/*.scss`,
    dist: `${distAssetsPath}/css`,
    autoprefixer: {
      browsers: ['last 1 version']
    },
    importModules: ['node_modules/reset-css/sass']
  },
  img: {
    src: `${srcPath}/images/**/*.+(jpg|png|gif|svg|webp)`,
    dist: `${distAssetsPath}/images`
  },
  server: {
    server: {
      baseDir: distPath
    },
    port: 8080
  },
  copy: {
    base: srcPath,
    src: [`${srcPath}/images/**/*.+(jpg|png|gif|svg|webp)`, `${srcPath}/videos/**/*.+(mp4)`],
    dist: `${distAssetsPath}`
  },
  clean: {
    dist: `${distPath}`
  }
};
