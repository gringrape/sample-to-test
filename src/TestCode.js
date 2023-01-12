/* eslint-disable class-methods-use-this */
export default class Code {
  static of() {
    return new Code();
  }

  code = '';

  setFrom(rawText) {
    if (!this.check(rawText)) {
      return;
    }
    this.code = this.generateTestCode(rawText);
  }

  clear() {
    this.code = '';
  }

  check(rawText) {
    return !rawText.startsWith('test(');
  }

  generateTestCode(rawText) {
    const assertions = this.parseTestCases(rawText)
      .map(this.toAssertion);

    return this.addDescriptionTo(assertions);
  }

  parseTestCases(rawText) {
    const [, ...testCases] = rawText.split(/\n/)
      .map((i) => i.trim())
      .filter((i) => i.length > 0)
      .map((i) => i.split(/\t/));

    return testCases;
  }

  toAssertion(testCase) {
    const args = testCase.slice(0, -1);
    const [result] = testCase.slice(-1);

    return `expect(solution(${args.join(', ')})).toEqual(${result})`;
  }

  addDescriptionTo(assertions) {
    const firstLine = 'test(\'sample\', () => {\n';
    const assertionLines = assertions.map((i) => `  ${i};`)
      .join('\n')
      .concat('\n');
    const lastLine = '});';

    return firstLine
      .concat(assertionLines)
      .concat(lastLine);
  }

  toString() {
    return this.code;
  }
}
