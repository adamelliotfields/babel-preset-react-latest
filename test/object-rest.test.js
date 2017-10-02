const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

// Uses Babel's _objectWithoutProperties helper function
const code = `
const { prop } = props,
      rest = _objectWithoutProperties(props, ["prop"]);
`;

test('transpiles a rest property to an object destructuring assignment', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'object-rest.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
