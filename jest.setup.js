// src/setupTests.js
// Paste your snippet here
global.ReadableStream = class { constructor() {} };
global.Blob = class {
  constructor(parts, options) {
    this.parts = parts;
    this.options = options;
  }
};
global.File = class extends Blob {
  constructor(parts, filename, options) {
    super(parts, options);
    this.name = filename;
  }
};
global.MessageChannel = class {
  constructor() {
    this.port1 = {};
    this.port2 = {};
  }
};
global.MessagePort = class {};
global.DOMException = class extends Error {
  constructor(message, name) {
    super(message);
    this.name = name;
  }
};

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);
