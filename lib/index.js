'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' ),
	isArray = require( 'validate.io-array' ),
	validate = require( './validate.js' );


// FUNCTIONS //

var hypot1 = require( './scalars.js' ),
	hypot2 = require( './array.js' ),
	hypot3 = require( './arrays.js' ),
	hypot4 = require( './accessor.js' ),
	hypot5 = require( './accessors.js' );


// HYPOT //

/**
* FUNCTION: hypot( a, b[, opts] )
*	Computes the square root of the sum of squares.
*
* @param {Number|Number[]|Array} a - input value
* @param {Number|Number[]|Array} b - input value
* @param {Object} [opts] - function options
* @param {Boolean} [opts.copy=true] - boolean indicating if the function should return a new array
* @param {Function} [opts.accessor] - accessor function for accessing array values
* @returns {Number|Number[]|Null} square root of the sum of squares or null
*/
function hypot( a, b, options ) {
	var aNum = isNumber( a ),
		bNum = isNumber( b ),
		aArr,
		bArr,
		opts,
		out,
		err;

	if ( aNum && bNum ) {
		return hypot1( a, b );
	}
	if ( arguments.length > 2 ) {
		opts = {};
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	aArr = isArray( a );
	bArr = isArray( b );
	if ( aArr && bArr ) {
		if ( a.length !== b.length ) {
			throw new Error( 'hypot()::invalid input arguments. Input arrays must be of equal length.' );
		}
		if ( opts.copy ) {
			out = new Array( a.length );
		} else {
			out = a;
		}
		if ( opts.accessor ) {
			return hypot5( out, a, b, opts.accessor );
		}
		return hypot3( out, a, b );
	}
	if ( bNum && aArr ) {
		if ( opts.copy ) {
			out = new Array( a.length );
		} else {
			out = a;
		}
		if ( opts.accessor ) {
			return hypot4( out, a, b, opts.accessor );
		}
		return hypot2( out, a, b );
	}
	if ( aNum && bArr ) {
		out = new Array( b.length );
		if ( opts.accessor ) {
			return hypot4( out, b, a, opts.accessor );
		}
		return hypot2( out, b, a );
	}

	// TODO: support ndarrays
	// (ndarray,scalar), (scalar,ndarray), (ndarray,ndarray)
	// TODO: update documentation once ndarrays are supported

	throw new TypeError( 'hypot()::invalid input argument. Invalid input arguments. Must provide either numeric values, arrays, or some combination of both. Values: `(' + a + ', ' + b + ')`.' );
} // end FUNCTION hypot()


// EXPORTS //

module.exports = hypot;
