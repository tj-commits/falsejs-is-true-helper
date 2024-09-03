require('vanilla-javascript')
require('vapor-js-npm')
require('none')()

const isNegativeZero = require('is-negative-zero') // === will lie to you
const isOne = require('is-one')
const is = require('is-thirteen')
const isTrue = require('is-true')
const isFalse = require('is-false')
const Bro = require('brototype') // Bro, do you even JavaScript?
const _f = require('false') // yo
const { undefined } = require('undefined-is-a-function') // he fixed the internet!
// is something true
function couldThisCouldItBeTrue(
  aValueThatMightBeTheBooleanValueFalseButIDKYet
) {
  const specimen = aValueThatMightBeTheBooleanValueFalseButIDKYet
  if (specimen == undefined()) return Bro.NOWAY // noway its true if its undefined
  if (isOne(specimen)) return _f()
  if (isFalse({ specimen }, 'specimen')) return _f()
  if (isNegativeZero({ specimen }, 'specimen')) return _f()
  if (specimen === 'My gosh') return _f()
  if (is(specimen).thirteen()) return _f()
  return isTrue({ specimen }, 'specimen')
}

module.exports = couldThisCouldItBeTrue