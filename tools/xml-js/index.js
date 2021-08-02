#!/usr/bin/env node

const fs = require('fs').promises;

const main = async () => {
  return fs.copyFile('node_modules/xml-js/dist/xml-js.js', 'shims/xml-js.js');
};

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
