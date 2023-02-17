/*global chrome*/

// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log("Hello linkedin from Huy 1234");

const getToken = async () => {
  const icon = document.createElement("img");
  icon.src = chrome.runtime.getURL("logo/logo-48.png");
  icon.style.cssText =
    "border-radius: 10px; padding: 8px; border: 1px solid #40B6E6; box-shadow: 0 3px 10px rgb(0 0 0 / 45%);";

  const button = document.createElement("button");
  button.appendChild(icon)
  button.style.cssText = "position: fixed; top: 80px; right: 30px;  cursor: pointer; z-index: 999"
  button.addEventListener("click", function () {
    alert("Get token for Talent-e");
    chrome.runtime.sendMessage(
      {
        message: "messageSent",
      },
      function (response) {
        console.log("Token: ", response);
      }
    );
  });
  document.body.appendChild(button);


};

getToken();
