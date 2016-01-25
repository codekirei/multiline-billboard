# `multiline-billboard`

[![Build Status][1]][2]
[![Coverage Status][3]][4]

<b>[About](#about)</b> | 
<b>[Installation](#installation)</b> | 
<b>[Usage](#usage)</b> | 
<b>[License](#license)</b>

## About

A Node.js module to format a string or array of strings into a billboard. Useful for displaying text in a CLI application. Configurable colors and border characters with sane defaults.

**Turn this:**

```js
console.log(billboard(
  [ 'Standing in hallway'
  , 'For forgetting my homework'
  , 'Mogami River'
  ]))
```

**Into this:**

![screenshot](https://raw.githubusercontent.com/codekirei/multiline-billboard/master/extra/screenshot.png)

## Installation

Install and require as a standard Node module.

**Install**

```
  $ npm install --save multiline-billboard
```

**Require**

```js
  var billboard = require('multiline-billboard')
```

## Usage

```js
/*
 @param {String|String[]} strOrStrs - text to put in billboard
 @param {Object} [customOpts] - opts to override defaults
 @returns {String} billboard
 */
billboard(strOrStrs, customOpts)
```

`billboard` is a function that takes two params:

  - a string or array of strings to build the billboard around
  - an object of custom options to override the defaults (optional)

See [defaults](https://github.com/codekirei/multiline-billboard/blob/master/lib/defaults.js) for the default options. Each option is overrideable. [ansi-styles](https://github.com/chalk/ansi-styles) is used to color the border and text; check its documentation for supported colors.

## License

[MIT](https://github.com/codekirei/multiline-billboard/blob/master/license)

[1]:
[2]:
[3]:
[4]:
