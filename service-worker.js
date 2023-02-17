/*global chrome*/

// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.
// Importing and using functionality from external files is also possible.

// If you want to import a file that is deeper in the file hierarchy of your
// extension, simply do `importScripts('path/to/file.js')`.
// The path should be relative to the file `manifest.json`.
chrome.runtime.onMessage.addListener(
  // this is the message listener
  function (request, sender, sendResponse) {
    if (request.message === "messageSent") console.log("SENT message");
    chrome.cookies.getAll(
      {
        domain: ".linkedin.com",
      },
      function (cookies) {
        let csrf_token =''
        // console.log("Here1", cookies)
        const reduced = cookies.reduce((carry, item, index) => {
            if(item.name === "JSESSIONID"){
                csrf_token=item.value
            }
            carry[index] = `${item.name}=${item.value}`
            return carry;
        }, {});
        // console.log("Here1 ---- reduced = " , reduced)
        let result = Object.values(reduced).join("; ")
        console.log('linkedin token: ', result)
        console.log('csrf_token: ', csrf_token)
      }
    );
  }
);

importScripts("service-worker-utils.js");
