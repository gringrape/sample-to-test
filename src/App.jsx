import { useEffect } from 'react';

import copyToClipboard from 'clipboard-copy';

import useTestCode from './useTestCode';

export default function App() {
  const { testCode, parse } = useTestCode();

  useEffect(() => {
    if (testCode) {
      copyToClipboard(testCode);
    }
  }, [testCode]);

  const handlePaste = (e) => {
    const { clipboardData } = e;
    const copyText = clipboardData.getData('text');
    parse(copyText);
  };

  const handleChange = () => {};

  return (
    <div>
      <h1>Sample To Test Code (Jest)</h1>
      <div>
        <h2>How to use</h2>
        <img width="200" alt="example" src="assets/example.png" />
        <p>Copy &quot;프로그래머스&quot; test case table and paste to below.</p>
      </div>
      <textarea
        rows={20}
        cols={80}
        value={testCode}
        onChange={handleChange}
        onPaste={handlePaste}
      />
      {testCode && (
        <div style={{
          fontSize: '1.5em',
          fontWeight: 'bold',
          color: '#00008B',
          fontStyle: 'italic',
        }}
        >
          Copied to clip-board!
        </div>
      )}
    </div>
  );
}
