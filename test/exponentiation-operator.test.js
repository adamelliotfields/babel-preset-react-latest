const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

const code = `
let squared = Math.pow(2, 2);
`;

test('transpiles the exponentiation operator to a Math.pow call', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'exponentiation-operator.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
