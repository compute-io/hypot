'use strict';

// FUNCTIONS //

var SQRT = Math.sqrt;


// HYPOT //

/**
* FUNCTION: hypot( out, x, y )
*	Computes the square root of the sum of squares.
*
* @param {ndarray} out - output ndarray
* @param {ndarray} x - input ndarray
* @param {ndarray} y - input ndarray
* @returns {ndarray} square root of the sum of squares
*/
function hypot( out, x, y ) {
	var len = x.data.length,
		min,
		max,
		a, b, r,
		i;

	for ( i = 0; i < len; i++ ) {
		a = x.data[ i ];
		b = y.data[ i ];
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
		out.data[ i ] = max * SQRT( 1 + r*r );
	}
	return out;
} // end FUNCTION hypot()


// EXPORTS //

module.exports = hypot;