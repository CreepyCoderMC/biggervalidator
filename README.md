# Bigger Validator
This module is small but easy to use. The purpose of this module is to check if the source value is bigger than the target value, and optionally also if they are equal. The source and target can be a string or a number.
## Validation Processes
The code checks that the source value is bigger than the target value, and optionally also if they are equal.
### Compare method 1
This method checks that the source value is bigger than the target value.
### Compare method 2
This method checks that the source value is equal to the value if specified.
## Code Sample
This following code is to tested that all methods correctly functions as intended, is also provided in this module.
```
import { valueIsBigger } from '@teamcoder/biggervalidator';

console.log( "Testing Condition  1 Passed = " + valueIsBigger(  15  , 14            ) );
console.log( "Testing Condition  2 Passed = " + valueIsBigger(  'b' , 'a'           ) );
console.log( "Testing Condition  3 Passed = " + !valueIsBigger( 14  , 15            ) );
console.log( "Testing Condition  4 Passed = " + !valueIsBigger( 'a' , 'b'           ) );
console.log( "Testing Condition  5 Passed = " + !valueIsBigger( 15  , 15    , false ) );
console.log( "Testing Condition  6 Passed = " + !valueIsBigger( 'a' , 'a'   , false ) );
console.log( "Testing Condition  7 Passed = " + valueIsBigger(  15  , 15    , true  ) );
console.log( "Testing Condition  8 Passed = " + valueIsBigger(  'a' , 'a'   , true  ) );
```
The results will look as follows
```
Testing Condition  1 Passed = true
Testing Condition  2 Passed = true
Testing Condition  3 Passed = true
Testing Condition  4 Passed = true
Testing Condition  5 Passed = true
Testing Condition  6 Passed = true
Testing Condition  7 Passed = true
Testing Condition  8 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { String , Number } source        The source value to compare
@param  { String , Number } target        The target value to compare
@param  { Boolean         } equal         Check if source value and target value equal ( optional , default = false )
```
### Parameters Returned
```
@return { Boolean         }               Validation passed or failed
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \biggervalidator\biggervalidator.js:1
import { valueIsBigger } from '@teamcoder/biggervalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 04 September 2022      | Official first release                                                                                |
| 1.0.1    | 04 September 2022      | Correcting spelling mistakes                                                                          |
| 1.0.2    | 06 September 2022      | Correcting documentation                                                                              |
| 1.0.3    | 09 September 2022      | Fixed package.json so that npm can install on any os                                                  |
| 1.0.4    | 09 September 2022      | Fixed code to be proper npm package                                                                   |
| 1.0.5    | 10 September 2022      | Fixed code to be proper npm package                                                                   |
| 1.0.6    | 10 September 2022      | Correcting documentation                                                                              |
| 1.0.7    | 10 September 2022      | Correcting documentation                                                                              |
| 1.0.8    | 11 September 2022      | Removed Default from export function in biggervalidator.js file                                       |
| 1.0.9    | 11 September 2022      | Correcting documentation                                                                              |
| 1.0.10   | 11 September 2022      | Correcting documentation                                                                              |
| 1.0.11   | 11 September 2022      | Correcting documentation                                                                              |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/biggervalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
BiggerValidator ?? 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)