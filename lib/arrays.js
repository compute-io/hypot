'use strict';

// FUNCTIONS //

var SQRT = Math.sqrt;


// HYPOT //

/**
* FUNCTION: hypot( out, x, y )
*	Computes the square root of the sum of squares.
*
* @param {Array} out - output array
* @param {Number[]} x - input array
* @param {Number[]} y - input array
* @returns {Number[]} square root of the sum of squares
*/
function hypot( out, x, y ) {
	var len = x.length,
		min,
		max,
		a, b, r,
		i;

	for ( i = 0; i < len; i++ ) {
		a = x[ i ];
		b = y[ i ];
		a = ( a < 0 ) ? -a : a;
		b = ( b < 0 ) ? -b : b;
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
