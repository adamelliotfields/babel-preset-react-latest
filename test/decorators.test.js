const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

// Using a Radium class decorator as an example
const code = `
let Button = Radium(_class = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        {
          style: [styles.base], __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          }
        },
        this.props.children
      );
    }
  }]);

  return Button;
}(Component)) || _class;
`;

test('transpiles a class decorator to a wrapped class declaration', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'decorators.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
