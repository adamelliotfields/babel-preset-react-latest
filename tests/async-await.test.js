const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

const code = `
let foo = (() => {
  var _ref = _asyncToGenerator(function* () {
    yield bar();
  });

  return function foo() {
    return _ref.apply(this, arguments);
  };
})()
`;

test('transpiles async await to an ES6 generator', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'async-await.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
