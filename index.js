'use strict';

var plugins = [
  // ES7
  // 👇 compiles ES7 exponentiation operator to Math.pow
  require('babel-plugin-transform-exponentiation-operator'),

  // ES8
  // 👇 compiles ES8 async functions to ES6 generators
  require('babel-plugin-transform-async-to-generator'),

  // Stage 3
  // 👇 transforms async generator functions and for...await statements to ES6 generators
  require('babel-plugin-transform-async-generator-functions'),

  // 👇 transforms rest properties for object destructuring assignment and spread properties for object literals
  require('babel-plugin-transform-object-rest-spread'),

  // Stage 2
  // 👇 transforms class property initializers
  require('babel-plugin-transform-class-properties'),

  // 👇 compiles class and object decorators to ES5
  require('babel-plugin-transform-decorators'),

  // React
  // 👇 transforms JSX to React.createElement function calls
  require('babel-plugin-transform-react-jsx'),

  // 👇 allows parsing of JSX syntax
  require('babel-plugin-syntax-jsx')
];

// The following two plugins are currently necessary to make React warnings include more valuable information.
var env = process.env.BABEL_ENV || process.env.NODE_ENV;

if (env === 'development' || env === 'test') {
  plugins.push(
    // 👇 adds __self={this} to JSX elements (used in development mode to generate runtime warnings)
    require('babel-plugin-transform-react-jsx-self'),

    // 👇 adds __source={{ fileName, lineNumber }} to JSX elements
    require('babel-plugin-transform-react-jsx-source')
  );
}

module.exports = {
  plugins: plugins
};
