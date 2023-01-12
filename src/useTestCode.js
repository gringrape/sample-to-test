import Code from './TestCode';

import useModel from './useModel';

export default function useTestCode() {
  const testCode = useModel(Code);

  return {
    testCode: testCode.toString(),
    parse: testCode.setFrom.bind(testCode),
    clearCode: testCode.clear.bind(testCode),
  };
}
