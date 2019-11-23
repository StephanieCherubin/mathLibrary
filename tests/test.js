const lib = require('../src/index');

test('test toDollars', () => {
  expect(lib.toDollars(3.5)).toBe('$3.50')
  expect(lib.toDollars(3.509)).toBe('$3.51')
  expect(lib.toDollars(0.999)).toBe('$1.00')
});


test('phi ', () => {
  expect(Number.phi).toBe((1 + Math.sqrt(5)) / 2)
});

test('round', () => {
  expect(7.1.round()).toBe(7)
})

test('floor', () => {
  expect(1.8.floor()).toBe(1)
})

test('ceil', () => {
  expect(4.8.ceil()).toBe(5)
})

test('degToRad', () => {
  expect(lib.degToRad(45)).toBe(45 * Math.PI / 180)
})

test('radToDeg', () => {
  expect(lib.radToDeg(0.785)).toBe(0.785 * 180 / Math.PI)
})

test('toDollars', () => {
  expect(lib.toDollars(4.8)).toBe('$4.80')
})