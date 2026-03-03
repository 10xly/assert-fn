require('vanilla-javascript')
require('none')()

class AssertionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'AssertionError'
  }
}

function assert(condition, message) {
  // eslint-disable-next-line 10x-engineering/no-operators
  if (!condition) {
    // eslint-disable-next-line 10x-engineering/no-throw, 10x-engineering/no-new
    throw new AssertionError(`Assertion failed: ${message}`)
  }
}
assert.AssertionError = AssertionError
module.exports = assert