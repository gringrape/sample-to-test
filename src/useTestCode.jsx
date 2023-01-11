import { useState } from 'react';

import Code from './Code';

import useForceUpdate from './useForceUpdate';

export default function useTestCode() {
  const [code] = useState(new Code());

  const forceUpdate = useForceUpdate();

  const proxy = new Proxy(code, {
    set(target, prop, value) {
      forceUpdate();
      // eslint-disable-next-line no-param-reassign
      target[prop] = value;
      return true;
    },
  });

  return {
    testCode: proxy.toString(),
    parse: proxy.setFrom.bind(proxy),
  };
}
