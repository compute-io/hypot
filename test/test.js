/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	hypot = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-hypot', function tests() {

	it( 'should export a function', function test() {
		expect( hypot ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided non-numeric values', function test() {
		var values = [
			'5',
			new Number( 5 ),
			[],
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue1( values[i] ) ).to.throw( TypeError );
			expect( badValue2( values[i] ) ).to.throw( TypeError );
		}
		function badValue1( value ) {
			return function() {
				hypot( value, 5 );
			};
		}
		function badValue2( value ) {
			return function() {
				hypot( 5, value );
			};
		}
	});

	it( 'should compute the hypotenuse', function test() {
		assert.strictEqual( hypot( 3, 4 ), 5 );
		assert.strictEqual( hypot( 8, 6 ), 10 );
		assert.strictEqual( hypot( 5, 12 ), 13 );
	});

});
