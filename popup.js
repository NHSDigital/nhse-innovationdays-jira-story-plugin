document.addEventListener("DOMContentLoaded", () => {
  // null here defaults to active tab of current window
  chrome.tabs.executeScript(null, {
    code: `
      document.querySelector(".user-content-block").innerText;
    `
  }, response => {
    const pageData = response[0];

    if (!pageData) {
      console.log("Could not get data from page.");
      return;
    }

    document.getElementById("ticketDescription").innerText = pageData;
  });
});
