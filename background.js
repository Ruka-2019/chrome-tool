chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "echoText",
    title: "Echo Selected Text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "echoText" && info.selectionText) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    }, () => {
      chrome.tabs.sendMessage(tab.id, { text: info.selectionText });
    });
  }
});
