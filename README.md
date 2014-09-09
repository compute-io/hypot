hypot
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the hypotenuse of a right triangle.


## Installation

``` bash
$ npm install compute-hypot
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var lib = require( 'compute-hypot' );
```


## Examples

``` javascript
var lib = require( 'compute-hypot' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-hypot.svg
[npm-url]: https://npmjs.org/package/compute-hypot

[travis-image]: http://img.shields.io/travis/compute-io/hypot/master.svg
[travis-url]: https://travis-ci.org/compute-io/hypot

[coveralls-image]: https://img.shields.io/coveralls/compute-io/hypot/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/hypot?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/hypot.svg
[dependencies-url]: https://david-dm.org/compute-io/hypot

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/hypot.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/hypot

[github-issues-image]: http://img.shields.io/github/issues/compute-io/hypot.svg
[github-issues-url]: https://github.com/compute-io/hypot/issues