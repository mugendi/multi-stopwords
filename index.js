const fs = require('fs'),
	path = require('path');

let allStopWords = [];
let langs = [];
let dictsDir = path.join(__dirname, './dicts');
let stopWords = fs
	.readdirSync(dictsDir)
	.map((f) => {
		let words = require(path.join(dictsDir, f));
		let lang = f.replace('.json', '');

		// list all stop words
		allStopWords = allStopWords.concat(words);

		// list all languages
		langs.push(lang);

		return {
			[lang]: words,
		};
	})
	.reduce((a, b) => Object.assign(a, b), {});

stopWords.all = allStopWords;
stopWords.langs = langs;
stopWords.get = function () {
	// ensure is a string array
	langs = Array.from(arguments).filter(v=>'string' == typeof v);

	return langs.reduce((a, b) => a.concat(stopWords[b] || []), []);
};

function arrify(v) {
	if (v === undefined) return [];
	return Array.isArray(v) ? v : [v];
}

module.exports = stopWords;
