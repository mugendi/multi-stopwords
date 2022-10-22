/**
 * Copyright (c) 2022 Anthony Mugendi
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

let stopWords = require('.');
console.log(stopWords.langs);

console.log(stopWords.en.length);
console.log(stopWords.sw.length);
console.log(stopWords.get('sw','en').length);