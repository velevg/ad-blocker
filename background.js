const adList = [
  "*://*.doubleclick.net/*",
  "*://partner.googleleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.googletagservices.com/*",
  "*://*.googleadservices.com/*",
  "*://*.google-analytics.com/*",
  "*://*.googleadservices.com/*",
  "*://*.zedo.com/*",
  "*://*.adbrite.com/*",
  "*://*.adbureau.net/*",
  "*://*.carbonads.net/*",
  "*://*.cdn.carbonads.com/*",
  "*://*.cdn.carbonads.net/*",
  "*://*.cdn.doubleclick.net/*",
  "*://*.cdn.googletagservices.com/*",
  "*://*.cdn.googleadservices.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://*.https://scorewarrior.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: adList },
  ["blocking"]
);
