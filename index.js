'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// node
const EOL = require('os').EOL

// npm
const ansi = require('ansi-styles')
const merge = require('lodash.merge')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
const SPACE = ' '
const defaultOpts =
  { colors:
    { text: 'white'
    , border: 'blue'
    }
  , border:
    { ul: '╔'
    , lr: '╝'
    , ur: '╗'
    , ll: '╚'
    , vertical: '║'
    , horizontal: '═'
    }
  }

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
const bot = (fill, opts) =>
  [ opts.border.ll
  , opts.border.horizontal
  , fill
  , opts.border.horizontal
  , opts.border.lr
  , ansi[opts.colors.border].close
  ].join('')

/**
  Pad a string with spaces to a specified length.

  @param {Number} max - length to pad to
  @returns {Function} curried fn
 */
const pad = max => str => {
  const len = str.length
  return max > len ? str + ' '.repeat(max - len) : str
}

// doc me
const wrap = opts => str =>
  [ opts.border.vertical
  , ansi[opts.colors.border].close
  , SPACE
  , ansi[opts.colors.text].open
  , str
  , ansi[opts.colors.text].close
  , SPACE
  , ansi[opts.colors.border].open
  , opts.border.vertical
  , EOL
  ].join('')

// doc me
function handleStrs(strs, opts) {
  const len = longest(strs)
  const text = strs
    .map(pad(len))
    .map(wrap(opts))
    .join('')
  return {len, text}
}

// doc me
function handleStr(str, opts) {
  const len = str.length
  const text = wrap(opts)(str)
  return {len, text}
}

// doc me
function billboard(strOrStrs, customOpts) {
  const opts = merge({}, defaultOpts, customOpts)
  const mid = typeof strOrStrs === 'object'
    ? handleStrs(strOrStrs, opts)
    : handleStr(strOrStrs, opts)
  const fill = opts.border.horizontal.repeat(mid.len)
  return [top(fill, opts), mid.text, bot(fill, opts)].join('')
}

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = billboard
