'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const ansi = require('ansi-styles')
const merge = require('lodash.merge')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
const defaultOpts =
  { colors:
    { text: 'blue'
    , border: 'white'
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

function billboard(strOrStrs, customOpts) {
  const opts = merge({}, defaultOpts, customOpts)
  const len = typeof strOrStrs === 'object'
    ? longest(strOrStrs)
    : strOrStrs.length
}

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = billboard
