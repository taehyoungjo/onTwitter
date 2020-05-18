chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ follows: true }, function () {
    console.log("Follows is true");
  });
  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;

      chrome.storage.sync.get("follows", function (data) {
        let link =
          "https://twitter.com/search?q=" +
          url +
          "&src=recent_search_click" +
          (data.follows ? "&pf=on" : "");
        chrome.tabs.create({ url: link });
      });
    });
  });
});
