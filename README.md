# frontend-template

## Feature

- Node 16.x
- Webpack 4
- gulp 4

* [x] タスクランナ- (gulp4)
* [x] HTML モジュール (EJS)
* [x] JS モジュールバンドラー (Webpack4)
  - [x] babel-loader
  - [x] source-map-loader
  - [x] url-loader
  - [x] webpack-glsl-loader
* [x] Sass（DartSass）
* [x] CSS のベンダープレフィックス付与自動化 (autoprefixer)
* [x] CSS の圧縮 (csswring)
* [x] ライブリロード (browser-sync)
* [x] HTM Minify (html-minifier)
* [x] prettier

## Usage

### Install

```
$ npm i
```

### Start Tasks

```
$  npm run watch
```

### Build By Development Mode

```
$ npm run dev
```

### Build By Production Mode

```
$ npm run build
```

### Format code

```
$ npm run format
```

## Directories

```
├── .eslint
├── .gitignore
├── gulpfile.js
├── package.json
├── gulp
│   ├── tasks
│   ├── config.js
│   └── plugins.js
├── src
│   ├── images
│   ├── js
│   │   └── modules
│   ├── scss
│   │   ├── 00_base
│   │   │   ├── _base.scss
│   │   │   ├── _functions.scss
│   │   │   ├── _mixin.scss
│   │   │   └── _variables.scss
│   │   ├── 01_layout
│   │   ├── 02_project
│   │   ├── 03_component
│   │   ├── 99_utility
│   │   └── style.scss
│   └── ejs
│       ├── base
│       │   ├── _header.ejs
│       │   └── _footer.ejs
│       ├── const //HTMLの固定のデータの設定
│       │   ├── _path.ejs
│       │   ├── _siteData.ejs
│       │   └── _url.ejs
│       ├── pages
│       │   └── _${name}.ejs
│       ├── svg
│       └── index.ejs
├── webpack.config.js
└── dist
```
