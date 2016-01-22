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
// doc me
const bot = (fill, opts) =>
  [ opts.border.ll
  , opts.border.horizontal
  , fill
  , opts.border.horizontal
  , opts.border.lr
  , ansi[opts.colors.border].close
  ].join('')

// doc me
const top = (fill, opts) =>
  [ ansi[opts.colors.border].open
  , opts.border.ul
  , opts.border.horizontal
  , fill
  , opts.border.horizontal
  , opts.border.ur
  , EOL
  ].join('')

// doc me
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
// doc me
function handleStr(str, opts) {
  const len = str.length
  const text = wrap(opts)(str)
  return {len, text}
}

// doc me
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
