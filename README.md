le-converter-service
=========

A small library providing utility methods to `escape` and `unescape` HTML entities

![Build Status](https://api.travis-ci.org/castle-dev/le-converter-service.svg?branch=develop "Build Status")

[![Dependency Status](https://david-dm.org/castle-dev/le-converter-service.svg)](https://david-dm.org/castle-dev/le-converter-service)

## Installation

  `npm install le-converter-service --save`

## Usage

```
  var ConverterService = require('converter'),
      converter = new ConverterService(),
      escape = converter.escape,
      unescape = converter.unescape;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);
```

## Tests

  `npm test` to run unit tests once
  `gulp tdd` to run unit tests on every file change

## Contributing

Please follow the project's [conventions](https://github.com/castle-dev/le-converter-service/blob/master/CONTRIBUTING.md) or your changes will not be accepted

## Release History

* 0.1.3 Configure Travis CI to publish docs to GitHub Pages
* 0.1.2 Add Dependency Status Badge
* 0.1.1 Add Travis CI
z 0.1.0 Initial release
