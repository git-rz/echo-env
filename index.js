#!/usr/bin/env node

console.log(JSON.stringify(process.env, null, 2));

console.error(`The npm_lifecycle_event is: ${process.env.npm_lifecycle_event}`);
console.error(`The npm_lifecycle_script is: ${process.env.npm_lifecycle_script}`);

if ('npx' === process.env.npm_lifecycle_event) {
  process.exit(1);
}
