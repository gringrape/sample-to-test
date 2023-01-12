import { useEffect } from 'react';

import copyToClipboard from 'clipboard-copy';

import useTestCode from './useTestCode';

export default function TestCode() {
  const { testCode, parse, clearCode } = useTestCode();

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

  const handleClick = () => {
    clearCode();
  };

  return (
    <div>
      <div>
        <button
          style={{
            padding: '.5em 1.8em',
          }}
          type="button"
          onClick={handleClick}
        >
          Clear

        </button>
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
