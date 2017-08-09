const babel = require('babel-core');
const path = require('path');

const preset = require('../index.js');

const code = `
let Parent = class Parent extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      active: false
    }, this.handleClick = () => {
      this.setState(({ active }) => ({
        active: !active
      }));
    }, _temp;
  }

  render() {
    return React.createElement(Child, { onClick: this.handleClick, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    });
  }
};
`;

test('transpiles an initialized property and method', () => {
  const result = babel.transformFileSync(path.join(__dirname, 'class-properties.js'), {
    presets: [preset]
  });

  expect(result.code).toEqual(expect.stringContaining(code.trim()));
});
