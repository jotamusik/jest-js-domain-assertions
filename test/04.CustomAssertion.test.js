import Person from '../src/person'

describe('04 Custom Assertion', () => {
  test('will display custom message on failure', () => {
    const person = new Person("Peter", 18)

    expect(person).toBeChild()
  })
})
