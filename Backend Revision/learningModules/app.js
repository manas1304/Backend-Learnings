/**
 * Case 1 -- No default export -- import * as math from '../learningModules/math.js'
 * Case 2 -- Exporting all as default -- import math from '../learningModules/math.js';
 * Case 3 - No default export but importing separate functions -- import {add, prod} from '../learningModules/math.js'
 * Only one default export allowed per file.
 */
import math from '../learningModules/math.js'


console.log(typeof(math));
console.log(math.add(5,6));
console.log(math.prod(5,6))