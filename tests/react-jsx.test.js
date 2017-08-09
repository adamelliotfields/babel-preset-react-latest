/* global test, expect */

const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

// the "__self" and "__source" attributes are because Jest runs in test mode
// these attributes will only appear in test and development mode
const code = `
const Div = ({ children }) => React.createElement(
  "div",
  {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  },
  children
);
`;

test('transpiles JSX to a React.createElement call', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'react-jsx.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
