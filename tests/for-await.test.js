const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

const code = `
let foo = (() => {
  var _ref = _asyncToGenerator(function* () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _asyncIterator(items), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
        const item = _value;

        bar(item);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

  return function foo() {
    return _ref.apply(this, arguments);
  };
})();
`;

test('transpiles an async for await loop', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'for-await.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
