export default class Person {
  constructor(name, age) {
    this._name = name
    this._age = age
  }

  get name() {
    return this._name
  }

  get age() {
    return this._age
  }

  toString() {
    return `Person(name=${this.name}, age=${this.age})`
  }
}
