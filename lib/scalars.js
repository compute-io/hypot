'use strict';

// HYPOT //

/**
* FUNCTION: hypot( a, b )
*	Computes the square root of the sum of squares.
*
* @param {Number} a - input value
* @param {Number} b - input value
* @returns {Number} square root of the sum of squares
*/
function hypot( a, b ) {
	var min, max, r;
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
	return max * Math.sqrt( 1 + r*r );
} // end FUNCTION hypot()


// EXPORTS //

module.exports = hypot;
