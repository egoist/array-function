# array-function [![NPM version](https://img.shields.io/npm/v/array-function.svg)](https://npmjs.com/package/array-function) [![NPM downloads](https://img.shields.io/npm/dm/array-function.svg)](https://npmjs.com/package/array-function) [![Build Status](https://travis-ci.org/egoist/array-function.svg?branch=master)](https://travis-ci.org/egoist/array-function)

> Read JS function from JSON data.

## Install

```
$ npm install --save array-function
```

## Usage

```js
const arrayFunction = require('array-function')

const fn = arrayFunction(JSON.stringify(['foo', 'bar', 'zoo', {a: 1}]))
// return
{
	name: 'foo',
	args: ['bar', 'zoo', {a: 1}]
}
```

## License

MIT © [EGOIST](https://github.com/egoist)
