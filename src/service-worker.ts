// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

import { myUtilityFunction } from './service-worker-util'

console.log(
  'This prints to the console of the service worker (background script)'
)

myUtilityFunction() // This is a function defined in src/service-worker-utils.ts
