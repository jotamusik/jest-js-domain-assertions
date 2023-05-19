import Person from '../src/person'

// IMPORTANT!: This needs 'jest-expect-message' to be installed
describe('02 Custom Failure Message', () => {
  test('will display custom message ' +
    '+ comparison message on failure', () => {
    const person = new Person("Peter", 16)

    expect(person.age, 'is not an adult')
      .toBeGreaterThanOrEqual(18)
  })
})
