'use strict';

exports.__esModule = true;

var env = process.env.BABEL_ENV || process.env.NODE_ENV;

// babel-helpers function
// fixes "Falsy value found in plugins" error
var interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : { default: obj };
};

var babelPluginTransformReactJSX = interopRequireDefault(require('babel-plugin-transform-react-jsx')).default;
var babelPluginTransformExponentiationOperator = interopRequireDefault(require('babel-plugin-transform-exponentiation-operator')).default;
var babelPluginTransformAsyncToGenerator = interopRequireDefault(require('babel-plugin-transform-async-to-generator')).default;
var babelPluginTransformAsyncGeneratorFunctions = interopRequireDefault(require('babel-plugin-transform-async-generator-functions')).default;
var babelPluginTransformObjectRestSpread = interopRequireDefault(require('babel-plugin-transform-object-rest-spread')).default;
var babelPluginTransformDecoratorsLegacy = interopRequireDefault(require('babel-plugin-transform-decorators-legacy')).default;
var babelPluginTransformClassProperties = interopRequireDefault(require('babel-plugin-transform-class-properties')).default;
var babelPluginTransformES2015Classes = interopRequireDefault(require('babel-plugin-transform-es2015-classes')).default;
var babelPluginTransformReactJSXSelf = interopRequireDefault(require('babel-plugin-transform-react-jsx-self')).default;
var babelPluginTransformReactJSXSource = interopRequireDefault(require('babel-plugin-transform-react-jsx-source')).default;

// Babel plugins are evaluated first-to-last
var plugins = [
  // React
  // transforms JSX to React.createElement function calls
  // plugin includes syntax-jsx
  [
    babelPluginTransformReactJSX,
    // when spreading props, use Object.assign directly instead of Babel’s extend helper
    // requires Object.assign to be available globally
    { useBuiltIns: true }
  ],

  // Stage 2
  // compiles class and object decorators to ES5
  // note: Babel 6 dropped support for decorators, so the legacy plugin must be used
  // important: this must come before the transform-class-properties plugin
  babelPluginTransformDecoratorsLegacy,

  // transforms class property initializers
  babelPluginTransformClassProperties,

  // transforms ES6 classes to ES5
  // required for react-hot-loader to work
  // https://github.com/gaearon/react-hot-loader/issues/313
  babelPluginTransformES2015Classes,

  // Stage 3
  // transforms async generator functions and for...await statements to ES6 generators
  babelPluginTransformAsyncGeneratorFunctions,

  // transforms rest properties for object destructuring assignment and spread properties for object literals
  [
    babelPluginTransformObjectRestSpread,
    // when spreading props, use Object.assign directly instead of Babel’s extend helper
    // requires Object.assign to be available globally
    { useBuiltIns: true }
  ],

  // ES8
  // compiles ES8 async functions to ES6 generators
  babelPluginTransformAsyncToGenerator,

  // ES7
  // compiles ES7 exponentiation operator to Math.pow
  babelPluginTransformExponentiationOperator
];

// The following two plugins are currently necessary to make React warnings include more valuable information
if (env === undefined || env === 'development' || env === 'test') {
  plugins.push(
    // adds __self={this} to JSX elements (used in development mode to generate runtime warnings)
    babelPluginTransformReactJSXSelf,

    // adds __source={{ fileName, lineNumber }} to JSX elements
    babelPluginTransformReactJSXSource
  );
}

exports.default = {
  plugins: plugins
};

module.exports = exports['default'];
