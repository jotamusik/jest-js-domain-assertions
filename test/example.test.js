
import Example from "../src/example";

describe('Example Class Definition', function () {
  test('Should have defined a exampleVariable member', function () {
    let example = new Example();
    expect(example.exampleVariable).toBeDefined();
  });
  test('Should have an exampleVariable getter', function () {
    let example = new Example();
    expect(example.getExampleVariable()).toBe(example.exampleVariable);
  });
  test('Should have an exampleVariable setter', function () {
    let example = new Example();
    let newExampleVariable = 'exampleModified';
    example.setExampleVariable(newExampleVariable);
    expect(example.exampleVariable).toBe(newExampleVariable);
  });
});
