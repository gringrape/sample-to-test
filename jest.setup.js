expect.extend({
  toBeBlank(received) {
    if (typeof received !== 'string') {
      return {
        pass: false,
        message: () => 'Value is not string!',
      };
    }

    if (received.length > 0) {
      return {
        pass: false,
        message: () => 'not blank!',
      };
    }

    return {
      pass: true,
      message: () => 'success',
    };
  },
});
