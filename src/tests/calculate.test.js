import calculate from '../logic/calculate';

describe('Check the result of calculate', () => {
  test('5 + 5 = 10', () => {
    const object = {
      total: 5,
      next: 5,
      operation: '+',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('10');
  });

  test('5 - 5 = 0', () => {
    const object = {
      total: 5,
      next: 5,
      operation: '-',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('0');
  });

  test('5 * 5 = 25', () => {
    const object = {
      total: 5,
      next: 5,
      operation: 'x',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('25');
  });

  test('5 % 2 = 1', () => {
    const object = {
      total: 5,
      next: 2,
      operation: '%',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('1');
  });
});
