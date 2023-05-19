import Person from '../src/person'

describe('01 Simple Expect', () => {
  test('will display data comparison message on failure', () => {
    const person = new Person("Peter", 16)

    expect(person.age)
      .toBeGreaterThanOrEqual(18)
  })
})
