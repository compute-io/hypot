'use strict';

var hypot = require( './../lib' );

var a = new Array( 100 ),
	b = new Array( a.length );

for ( var i = 0; i < a.length; i++ ) {
	a[ i ] = Math.round( Math.random()*100 );
	b[ i ] = Math.round( Math.random()*100 );
}

console.log( hypot( a, b ).join( '\n' ) );
