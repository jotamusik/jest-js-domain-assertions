import { expect } from '@jest/globals'
import Person from "../../src/person";

function toBeChild(actual) {
  if (!(actual instanceof Person)) {
    throw new Error('Wrong type, must be \'Person\'')
  }

  const isChild = actual.age < 18

  if (isChild) {
    return {
      message: () =>
        `expected ${this.utils.printReceived(actual.toString())} to not be a child`,
      pass: true,
    }
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(actual.toString())} to be a child`,
      pass: false,
    }
  }
}

function toBeAnAdult(actual) {
  if (!(actual instanceof Person)) {
    throw new Error('Wrong type, must be \'Person\'')
  }

  const isAdult = actual.age >= 18

  if (isAdult) {
    return {
      message: () =>
        `expected ${this.utils.printReceived(actual.toString())} to not be an adult`,
      pass: true,
    }
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(actual.toString())} to be an adult`,
      pass: false,
    }
  }
}

expect.extend({
  toBeChild,
  toBeAnAdult,
})
