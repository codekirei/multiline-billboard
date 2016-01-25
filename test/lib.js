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
import { longest
       , pad
       , center
       , bot
       , top
       , wrap
       , handleStr
       , handleStrs
       } from '../lib'
import defaults from '../lib/defaults'

//----------------------------------------------------------
// tests
//----------------------------------------------------------
const bo = ansi.blue.open
const bc = ansi.blue.close
const to = ansi.white.open
const tc = ansi.white.close

// longest
//----------------------------------------------------------
test('longest', t => t.is(longest(['one', 'two', 'three']), 5))

// pad
//----------------------------------------------------------
test('pad: left', t =>
  t.is(pad(6, 'left')('test'), 'test  ')
)

test('pad: right', t =>
  t.is(pad(6, 'right')('test'), '  test')
)

test('pad: center', t =>
  t.is(pad(6, 'center')('test'), center('test', 2))
)

test('pad: error', t =>
  t.throws(() => pad(6, 'cneter')('test'))
)

test('pad: noop', t =>
  t.is(pad(4)('test'), 'test')
)

// center
//----------------------------------------------------------
test('center: even diff', t =>
  t.is(center('test', 4), '  test  '))

test('center: odd diff', t =>
  t.is(center('test', 5), '  test   '))

// bot
//----------------------------------------------------------
test('bot', t =>
  t.is(
    bot(defaults.border.horizontal, defaults)
    , `╚═══╝${bc}`
  ))

// top
//----------------------------------------------------------
test('top', t =>
  t.is(
    top(defaults.border.horizontal, defaults)
    , `${bo}╔═══╗${EOL}`
  )
)

// wrap
//----------------------------------------------------------
test('wrap', t =>
  t.is(wrap(defaults)('test')
  , `║${bc} ${to}test${tc} ${bo}║${EOL}`
  ))

// handleStr
//----------------------------------------------------------
test('handleStr', t =>
  t.same(handleStr('test', defaults)
  , {len: 4, text: wrap(defaults)('test')})
)

// handleStrs
//----------------------------------------------------------
test('handleStrs', t => {
  const strs =
    [ 'Standing in hallway'
    , 'For forgetting my homework'
    , 'Mogami River']
  const text =
    [ `║${bc} ${to}   Standing in hallway    ${tc} ${bo}║${EOL}`
    , `║${bc} ${to}For forgetting my homework${tc} ${bo}║${EOL}`
    , `║${bc} ${to}       Mogami River       ${tc} ${bo}║${EOL}`
    ].join('')
  const expected = { len: strs[1].length, text }
  t.same(handleStrs(strs, defaults), expected)
})
