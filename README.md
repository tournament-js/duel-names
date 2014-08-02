# duel-names
[![npm status](http://img.shields.io/npm/v/duel-names.svg)](https://www.npmjs.org/package/duel-names)
[![build status](https://secure.travis-ci.org/clux/duel-names.svg)](http://travis-ci.org/clux/duel-names)
[![dependency status](https://david-dm.org/clux/duel-names.svg)](https://david-dm.org/clux/duel-names)
[![coverage status](http://img.shields.io/coveralls/clux/duel-names.svg)](https://coveralls.io/r/clux/duel-names)
[![experimental](http://img.shields.io/badge/stability-experimental-DD5F0A.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)

A mixin module for [Duel](https://www.npmjs.org/package/duel) that puts `roundName` function on the `Duel` class prototype that outputs the normal english names for duel rounds. This is here, rather than inside the duel repository for easy internationalization.

## Usage
Mixin with the Duel class:

```js
var Duel = require('duel');
Duel.attachNames(require('duel-names'));


var d = new Duel(4, WB);
d.roundName(d.matches[3].id);
'Bronze Final';
d.roundName(d.matches[2].id);
'Grand Final'
```

You can pass in a full match id, or a partial Id. The `id` must minimally contain `{ s: bracket, r: round }`.

## Localizing
Fork, make it work with your language, publish as `duel-names-LANGUAGE`. Submit issues/prs to this if insufficiently general. Something like that.

## License
MIT-Licensed. See LICENSE file for details.
