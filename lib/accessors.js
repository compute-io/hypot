'use strict';

// FUNCTIONS //

var SQRT = Math.sqrt;


// HYPOT //

/**
* FUNCTION: hypot( out, x, y, accessor )
*	Computes the square root of the sum of squares.
*
* @param {Array} out - output array
* @param {Array} x - input array
* @param {Array} y - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number[]} square root of the sum of squares
*/
function hypot( out, x, y, clbk ) {
	var len = x.length,
		min,
		max,
		a, b, r,
		i;

	for ( i = 0; i < len; i++ ) {
		a = clbk( x[ i ], i, 0 );
		b = clbk( y[ i ], i, 1 );
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
