const browser = globalThis.browser ?? globalThis.chrome;

browser.webRequest.onBeforeRequest.addListener(
  ({ url }) => {
    const params = new URLSearchParams(url);

    if (!params.get("hl")) {
      params.set("hl", localStorage.language ?? "en");
    }

    if (!params.get("gl")) {
      params.set("gl", localStorage.country ?? "us");
    }

    const newUrl = decodeURIComponent(params.toString());

    if (newUrl !== url) {
      return { redirectUrl: newUrl };
    }
  },
  {
    urls: ["*://*.google.com/search?*"],
    types: ["main_frame"],
  },
  ["blocking"]
);
