'use strict';

// FUNCTIONS //

var SQRT = Math.sqrt;


// HYPOT //

/**
* FUNCTION: hypot( out, x, b )
*	Computes the square root of the sum of squares.
*
* @param {Array} out - output array
* @param {Number[]} x - input array
* @param {Number} b - input value
* @returns {Number[]} square root of the sum of squares
*/
function hypot( out, x, b ) {
	var len = x.length,
		min,
		max,
		a, r,
		i;

	b = ( b < 0 ) ? -b : b;
	for ( i = 0; i < len; i++ ) {
		a = x[ i ];
		a = ( a < 0 ) ? -a : a;
		if ( a > b ) {
			min = b;
			max = a;
		} else  {
			min = a;
			max = b;
		}
		r = min / max;
		out[ i ] = max * SQRT( 1 + r*r );
	}
	return out;
} // end FUNCTION hypot()


// EXPORTS //

module.exports = hypot;
