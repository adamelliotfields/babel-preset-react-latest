# Babel Preset React Latest
> Babel preset for compiling React JSX and ES7+ JavaScript.

This preset includes everything needed to compile React JSX and ES7+ JavaScript (including some
proposals).

Despite the "latest" suffix, it does not include `babel-preset-es2015`. You can simply add it to
your `presets` array in your Babel or Webpack config if you need to target older browsers. Make sure
it is before `react-latest`, as Babel presets are evaluated last-to-first.

If you are planning on using `babel-preset-es2015`, make sure you also add either `babel-polyfill`
or Facebook's `regenerator` as Babel requires `regeneratorRuntime` to compile `async` and generator
functions to ES5.

**Notes:**
 - The `flow` preset is not included
 - The `dynamic-import-node` plugin is not included (used in `create-react-app`)
 - The `transform-react-jsx-self` and `transform-react-jsx-self` plugins are enabled in
`development` and `test` modes
 - The `transform-react-jsx` and `transform-object-rest-spread` plugins require `Object.assign` to
be available (either natively or through a polyfill)
 - The `transform-decorators-legacy` plugin is used instead of `transform-decorators` as Babel 6
does not support `@` decorators
 - The `transform-es2015-classes` plugin is used to ensure `react-hot-loader` will work

### Changelog
See [`CHANGELOG.md`](https://github.com/adamelliotfields/babel-preset-react-latest/blob/master/CHANGELOG.md).

### Installation
```bash
$ yarn add --dev babel-preset-react-latest
```

### Usage
**via `.babelrc`**

```json
{
  "presets": ["react-latest"]
}
```

**via CLI**

```bash
$ babel script.js --presets react-latest
```

**via Node API**

```javascript
const babel = require('babel-core');

babel.transform('code', {
  presets: ['react-latest']
});
```

### Plugins
`transform-react-jsx`
 - transforms JSX to `React.createElement`

`transform-exponentiation-operator`
 - transforms ES7 exponentiation operator to `Math.pow`

`transform-async-to-generator`
 - transforms ES8 `async` functions to ES6 generators

`transform-async-generator-functions`
 - transforms `async` generator functions and `for await` loops to ES6 generators

`transform-object-rest-spread`
 - transforms rest properties for object destructuring assignment and spread properties for object literals

`transform-decorators-legacy`
 - transforms class and object decorators

`transform-class-properties`
 - transforms class property initializers

`transform-es2015-classes`
 - transforms ES2015 classes to ES5

`transform-react-jsx-self`
 - adds `__self={this} to JSX elements` (`development` and `test` only)

`transform-react-jsx-source`
 - adds `__source={{ fileName, lineNumber }}` to JSX elements (`development` and `test` only)

### Tests
Jest test suites are available in the [repo](https://github.com/adamelliotfields/babel-preset-react-latest/tree/master/tests).

### Issues/Questions/Suggestions
If you run into a problem, or just need some help getting started with Babel (or React), feel free
to reach out to me directly (email is on my GitHub [profile](https://github.com/adamelliotfields)).
