/**
*
*	COMPUTE: hypot
*
*
*	DESCRIPTION:
*		- Computes the hypotenuse of a right triangle.
*
*
*	NOTES:
*		[1] Based on http://www.johndcook.com/blog/2010/06/02/whats-so-hard-about-finding-a-hypotenuse/ .
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var isNumeric = require( 'validate.io-number' );


	// HYPOT //

	/**
	* FUNCTION: hypot( a, b )
	*	Computes the hypotenuse of a right triangle.
	*
	* @param {Number} a - length of one side of triangle
	* @param {Number} b - length of other side of a triangle
	* @returns {Number} hypotenuse
	*/
	function hypot( a, b ) {
		if ( !isNumeric( a ) || !isNumeric( b ) ) {
			throw new TypeError( 'hypot()::invalid input argument. Input arguments must be numeric.' );
		}
		var min, max, r;
		a = Math.abs( a );
		b = Math.abs( b );
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

})();