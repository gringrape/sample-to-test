import { useState } from 'react';

import useForceUpdate from './useForceUpdate';

export default function useModel(modelClass) {
  const [model] = useState(modelClass.of());

  const forceUpdate = useForceUpdate();

  const proxy = new Proxy(model, {
    set(target, prop, value) {
      forceUpdate();
      // eslint-disable-next-line no-param-reassign
      target[prop] = value;
      return true;
    },
  });

  return proxy;
}
