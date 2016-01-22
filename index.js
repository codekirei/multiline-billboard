'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const merge = require('lodash.merge')

// local
const lib = require('./lib')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
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

// doc me
function billboard(strOrStrs, customOpts) {
  const opts = merge({}, defaultOpts, customOpts)
  const mid = typeof strOrStrs === 'object'
    ? lib.handleStrs(strOrStrs, opts)
    : lib.handleStr(strOrStrs, opts)
  const fill = opts.border.horizontal.repeat(mid.len)
  return [
    lib.top(fill, opts)
    , mid.text
    , lib.bot(fill, opts)
  ].join('')
}

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = billboard
