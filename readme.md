<!--
 Copyright (c) 2022 Anthony Mugendi
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Multi-Stopwords

This is a simple module to provide stop words in a variety of languages.

# How to use

Install module `yarn add multi-stopwords`

```javascript

let stopWords = require('multi-stopwords');

// get stop words by language 
// Note use 2 letter language codes only
console.log( stopWords.en );

// to view all available languages
console.log( stopWords.langs );

// get stop words in all of these languages
console.log( stopWords.all );

// get stop words in a number of languages
// in this case, English and Swahili
// You can list as many languages as you want to return
console.log( stopWords.get('sw','en') );

```

Note: Stop words are returned as an array that you of lower cased words.