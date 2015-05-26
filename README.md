hypot
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the square root of a sum of squares.


## Installation

``` bash
$ npm install compute-hypot
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var hypot = require( 'compute-hypot' );
```

#### hypot( a, b[, opts] )

Computes the square root of a sum of squares. The function accepts for its first two arguments either `numeric` values, `arrays`, or some combination of both.

``` javascript
var c = hypot( -5, 12 );
// returns 13
```

When provided an input `array`, the square root of the sum of squares is computed for each value. If either `a` or `b` is a scalar, the function expands the scalar to match the output `array` length.

``` javascript
var out;

out = hypot( [1,2,3], 5 );
// returns [...]

out = hypot( 5, [1,2,3] );
// returns [...]

out = hypot( [1,2,3], [4,5,6] );
// returns [...]
```

The function accepts the following `options`:

*	__accessor__: accessor `function` for accessing `array` values

For non-numeric `arrays`, provide an accessor `function` for accessing `array` values.

``` javascript

```


When `a` and `b` are both positive numbers, the result can be interpreted as the [hypotenuse](http://en.wikipedia.org/wiki/Pythagorean_theorem) of a right triangle.

``` javascript
var h = hypot( 5, 12 );
// returns 13
```


## Examples

``` javascript
var hypot = require( 'compute-hypot' );

var a = new Array( 100 ),
	b = new Array( a.length );

for ( var i = 0; i < a.length; i++ ) {
	a[ i ] = Math.round( Math.random()*100 );
	b[ i ] = Math.round( Math.random()*100 );
}

console.log( hypot( a, b ).join( '\n' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

The standard approach to calculating the hypotenuse is subject to overflows.

``` javascript
var a2 = a * a;
var b2 = b * b;
var c = Math.sqrt( a2 + b2 );
```

For a sufficiently large `a` or `b`, calculating the square will overflow resulting in an infinite result.

``` javascript
var a2 = 1e154 * 1e154;
var b2 = 1e154 * 1e154;
var c = Math.sqrt( a2 + b2 );
// returns +infinity
```

An alternative [approach](http://www.johndcook.com/blog/2010/06/02/whats-so-hard-about-finding-a-hypotenuse/) is numerically stable and avoids this problem. This approach is implemented here.

``` javascript
var c = hypot( 1e308, 1e308 );
// returns ~1.4142e308
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The Compute.io Authors.


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
