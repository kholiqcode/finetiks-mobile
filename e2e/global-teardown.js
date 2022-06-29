/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const detox = require('detox');

async function globalTeardown() {
  await detox.globalCleanup();
}

module.exports = globalTeardown;
