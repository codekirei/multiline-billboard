'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// node
import {EOL} from 'os'

// npm
import test from 'ava'
import ansi from 'ansi-styles'

// local
import billboard from '../'

//----------------------------------------------------------
// tests
//----------------------------------------------------------
const bo = ansi.blue.open
const bc = ansi.blue.close
const to = ansi.white.open
const tc = ansi.white.close

test('strs', t => {
  const strs =
    [ 'Standing in hallway'
    , 'For forgetting my homework'
    , 'Mogami River'
    ]
  const out = billboard(strs)
  const fill = '═'.repeat(strs[1].length)
  const expected =
    [ `${bo}╔═${fill}═╗`
    , `║${bc} ${to}   Standing in hallway    ${tc} ${bo}║`
    , `║${bc} ${to}For forgetting my homework${tc} ${bo}║`
    , `║${bc} ${to}       Mogami River       ${tc} ${bo}║`
    , `╚═${fill}═╝${bc}`
    ]
  out.split(EOL).map((str, i) => t.is(str, expected[i]))
})

test('str', t => {
  const testStr = 'This is not a test.'
  const out = billboard(testStr)
  const fill = '═'.repeat(testStr.length)
  const expected =
    [ `${bo}╔═${fill}═╗`
    , `║${bc} ${to}${testStr}${tc} ${bo}║`
    , `╚═${fill}═╝${bc}`
    ]
  out.split(EOL).map((str, i) => t.is(str, expected[i]))
})

test('custom opts', t => {
  const opts =
    { colors:
      { text: 'red' }
    , border:
      { ul: '/'
      , ur: '\\'
      , ll: '\\'
      , lr: '/'
      }
    }
  const testStr = 'This is not a test.'
  const out = billboard(testStr, opts)
  const fill = '═'.repeat(testStr.length)
  const expected =
    [ `${bo}/═${fill}═\\`
    , `║${bc} ${ansi.red.open}${testStr}${ansi.red.close} ${bo}║`
    , `\\═${fill}═/${bc}`
    ]
  out.split(EOL).map((str, i) => t.is(str, expected[i]))
})
