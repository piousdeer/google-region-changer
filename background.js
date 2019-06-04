chrome.webRequest.onBeforeRequest.addListener(
  ({ url }) => {
    const newUrl = new URLSearchParams(url)

    newUrl.set('hl', localStorage.language || 'en')
    newUrl.set('gl', localStorage.country || 'us')

    return {
      redirectUrl: decodeURIComponent(newUrl.toString())
    }
  },
  {
    urls: ['*://*.google.com/search?*'],
    types: ['main_frame']
  },
  ['blocking']
)
