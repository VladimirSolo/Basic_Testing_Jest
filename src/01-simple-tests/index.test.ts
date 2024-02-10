// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const inputNumbers = { a: 5, b: 5 };

  test('should add two numbers', () => {
    const add = simpleCalculator({ ...inputNumbers, action: Action.Add });
    expect(add).toBe(10);
  });

  test('should subtract two numbers', () => {
    const subtract = simpleCalculator({
      ...inputNumbers,
      action: Action.Subtract,
    });
    expect(subtract).toBe(0);
  });

  test('should multiply two numbers', () => {
    const multiply = simpleCalculator({
      ...inputNumbers,
      action: Action.Multiply,
    });
    expect(multiply).toBe(25);
  });

  test('should divide two numbers', () => {
    const divide = simpleCalculator({ ...inputNumbers, action: Action.Divide });
    expect(divide).toBe(1);
  });

  test('should exponentiate two numbers', () => {
    const exponentiate = simpleCalculator({
      ...inputNumbers,
      action: Action.Exponentiate,
    });
    expect(exponentiate).toBe(3125);
  });

  test('should return null for invalid action', () => {
    const invalidAction = simpleCalculator({ ...inputNumbers, action: '#' }); // Invalid action
    expect(invalidAction).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const invalidAction = simpleCalculator({
      a: 'invalid',
      b: 5,
      action: Action.Add,
    }); // Invalid argument 'a'
    expect(invalidAction).toBe(null);
  });
});
