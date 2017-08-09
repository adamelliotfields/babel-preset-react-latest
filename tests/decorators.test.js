const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

// Using a Radium class decorator as an example
const code = `
let Button = Radium(_class = class Button extends Component {
  render() {
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
}) || _class;
`;

test('transpiles a class decorator to a wrapped class declaration', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'decorators.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
