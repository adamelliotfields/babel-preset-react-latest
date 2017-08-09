const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

// Object.assign is used because { useBuiltIns: true } was passed to the plugin
const code = `
const props = Object.assign({ prop }, spread);
`;

test('transpiles a spread property to an Object.assign call', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'object-spread.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
