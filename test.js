import valueIsBigger from './biggervalidator.js';

console.log( "Testing Condition  1 Passed = " + valueIsBigger( 15 , 14 ) );
console.log( "Testing Condition  2 Passed = " + valueIsBigger( 'b' , 'a' ) );
console.log( "Testing Condition  3 Passed = " + !valueIsBigger( 14 , 15 ) );
console.log( "Testing Condition  4 Passed = " + !valueIsBigger( 'a' , 'b' ) );
console.log( "Testing Condition  5 Passed = " + !valueIsBigger( 15 , 15 , false ) );
console.log( "Testing Condition  6 Passed = " + !valueIsBigger( 'a' , 'a' , false ) );
console.log( "Testing Condition  7 Passed = " + valueIsBigger( 15 , 15 , true ) );
console.log( "Testing Condition  8 Passed = " + valueIsBigger( 'a' , 'a' , true ) );