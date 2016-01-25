'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// node
const EOL = require('os').EOL

// npm
const ansi = require('ansi-styles')

//----------------------------------------------------------
// general
//----------------------------------------------------------
/**
  Find character count of longest string in array.

  @param {String[]} ar - array of strings
  @returns {Number} number of characters in longest string
  */
const longest = ar =>
  ar.reduce((prev, cur) => {
    const len = cur.length
    return len > prev ? len : prev
  }, 0)

/**
  Pad a string with spaces to a specified length.

  @param {Number} max - length to pad to
  @returns {Function} curried fn
 */
const pad = max => str => {
  const len = str.length
  return max > len ? str + ' '.repeat(max - len) : str
}

//----------------------------------------------------------
// string builders
//----------------------------------------------------------
/**
  Build bottom line of billboard.

  @param {String} fill - horizontal border chars
  @param {Object} opts - options for this billboard
  @returns {String} bottom line of billboard
 */
const bot = (fill, opts) =>
  [ opts.border.ll
  , opts.border.horizontal
  , fill
  , opts.border.horizontal
  , opts.border.lr
  , ansi[opts.colors.border].close
  ].join('')

/**
  Build top line of billboard.

  @param {String} fill - horizontal border chars
  @param {Object} opts - options for this billboard
  @returns {String} top line of billboard
 */
const top = (fill, opts) =>
  [ ansi[opts.colors.border].open
  , opts.border.ul
  , opts.border.horizontal
  , fill
  , opts.border.horizontal
  , opts.border.ur
  , EOL
  ].join('')

/**
  Wrap a string with vertical border chars. Curried.

  @param {Object} opts - options for this billboard
  @returns {Function} fn that accepts string to wrap and returns string
 */
const wrap = opts => str =>
  [ opts.border.vertical
  , ansi[opts.colors.border].close
  , ' '
  , ansi[opts.colors.text].open
  , str
  , ansi[opts.colors.text].close
  , ' '
  , ansi[opts.colors.border].open
  , opts.border.vertical
  , EOL
  ].join('')

//----------------------------------------------------------
// billboard logic fork on str or strs
//----------------------------------------------------------
/**
  Builds middle of billboard from a string.

  @param {String} str - text to put on billboard
  @param {Object} opts - options for this billboard
  @returns {String} formatted string for middle of billboard
 */
function handleStr(str, opts) {
  const len = str.length
  const text = wrap(opts)(str)
  return {len, text}
}

/**
  Builds middle of billboard from an array of strings.

  @param {String[]} strs - text to put on billboard
  @param {Object} opts - options for this billboard
  @returns {String} formatted string for middle of billboard
 */
function handleStrs(strs, opts) {
  const len = longest(strs)
  const text = strs
    .map(pad(len))
    .map(wrap(opts))
    .join('')
  return {len, text}
}

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports =
  { longest
  , pad
  , bot
  , top
  , wrap
  , handleStr
  , handleStrs
  }
