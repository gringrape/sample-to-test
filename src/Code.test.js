import Code from './Code';

describe('code', () => {
  test('tranform', () => {
    const testCode = new Code();
    testCode.setFrom(`
    cap\tn\tdeliveries\tpickups\tresult
    4\t5\t[1, 0, 3, 1, 2]\t[0, 3, 0, 4, 0]\t16
    `);
    expect(testCode.toString()).toContain('expect(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])).toEqual(16)');
  });
});
