import Person from '../src/person'

describe('03 Extract Expect', () => {
  describe('using simple function', () => {
    test('will display the same message as before', () => {
      const person = new Person("Peter", 16)

      expectPersonToBeAnAdult(person)
    })
  })
  describe('using fluent api function', () => {
    test('will display the same message as before', () => {
      const person = new Person("Peter", 16)

      expectPerson(person).toBeAnAdult()
    })
  })
})

function expectPersonToBeAnAdult(person) {
  expect(person.age, 'is not an adult')
    .toBeGreaterThanOrEqual(18)
}

function expectPerson(person) {
  const _person = person
  return {
    toBeAnAdult: () => {
      expect(_person.age, 'is not an adult')
        .toBeGreaterThanOrEqual(18)
    },
    toBeChild: () => {
      expect(_person.age, 'is not a child')
        .toBeLessThan(18)
    }
  }
}
