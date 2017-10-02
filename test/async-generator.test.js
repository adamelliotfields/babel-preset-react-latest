const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

const code = `
let foo = (() => {
  var _ref = _asyncGenerator.wrap(function* () {
    yield _asyncGenerator.await(1);
    yield 2;
  });

  return function foo() {
    return _ref.apply(this, arguments);
  };
})();
`;

test('transpiles an async generator function to an ES6 generator', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'async-generator.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
