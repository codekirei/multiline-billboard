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
function billboard(strOrStrs, customOpts) {
  // handle opts
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
  const opts = merge({}, defaultOpts, customOpts)
}

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = billboard
