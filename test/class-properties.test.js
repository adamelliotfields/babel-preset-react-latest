const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

const code = `
let Parent = function (_Component) {
  _inherits(Parent, _Component);

  function Parent(...args) {
    var _temp, _this, _ret;

    _classCallCheck(this, Parent);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (Parent.__proto__ || Object.getPrototypeOf(Parent)).call(this, ...args)), _this), _this.state = {
      active: false
    }, _this.handleClick = () => {
      _this.setState(({ active }) => ({
        active: !active
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Parent, [{
    key: "render",
    value: function render() {
      return React.createElement(Child, { onClick: this.handleClick, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      });
    }
  }]);

  return Parent;
}(Component);
`;

test('transpiles an initialized property and method', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'class-properties.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
