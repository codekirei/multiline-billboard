'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const merge = require('lodash.merge')

// local
const lib = require('./lib')
const defaults = require('./lib/defaults')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
/**
  Build billboard from provided text.

  @param {String|String[]} strOrStrs - text to put in billboard
  @param {Object} customOpts - opts to override defaults
  @returns {String} billboard
 */
function billboard(strOrStrs, customOpts) {
  const opts = merge({}, defaults, customOpts)
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
