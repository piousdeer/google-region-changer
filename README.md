This extension forces Google to display search results in a specific language and for a specific region by appending `hl` and `gl` query parameters to URLs when you search for something. This could be useful if you are using a proxy.

Installation:
1. `git clone`
2. `chrome://extensions`
3. Make sure developer mode is enabled
4. Load repo as an unpacked extension

By default this extension forces Google to use English and display results for United States. To change this:
1. `chrome://extensions`
2. Make sure developer mode is enabled
3. Click "Background page" next to "Inspect views", then click "Console"
4. `localStorage.language = "<two-letter language code>"`
5. `localStorage.country = "<two-letter country code>"`

e.g.
```
localStorage.language = "es"
localStorage.country = "fr"
```
will display results for France, in Spanish.