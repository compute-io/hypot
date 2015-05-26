'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isBoolean = require( 'validate.io-boolean-primitive' ),
	isFunction = require( 'validate.io-function' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options. If an option is not present, a default option value is set.
*
* @param {Object} opts - destination for validated options
* @param {Object} options - function options
* @param {Boolean} [options.copy=true] - boolean indicating if the function should return a new array
* @param {Function} [options.accessor=null] - accessor function for accessing array values
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'hypot()::invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'copy' ) ) {
		opts.copy = options.copy;
		if ( !isBoolean( opts.copy ) ) {
			return new TypeError( 'hypot()::invalid option. Copy option must be a boolean primitive. Option: `' + opts.copy + '`.' );
		}
	} else {
		opts.copy = true;
	}
	if ( options.hasOwnProperty( 'accessor' ) ) {
		opts.accessor = options.accessor;
		if ( !isFunction( opts.accessor ) ) {
			return new TypeError( 'hypot()::invalid option. Accessor must be a function. Option: `' + opts.accessor + '`.' );
		}
	} else {
		opts.accessor = null;
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
