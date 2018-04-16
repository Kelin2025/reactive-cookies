# Reactive cookies

Small tool to detect cookies changes

## Installation

```
npm install reactive-cookies
```

## Usage

```javascript
import ReactiveCookies from "reactive-cookies"

// Init
const Cookies = new ReactiveCookies({
  interval: 10000 // Detection interval (to check outdated cookies)
})

// All cookies here
console.log(Cookies.store)

// Subscribe to cookies changes
Cookies.subscribe(store => {
  console.log(store)
})

// Set cookie
Cookies.set("key", "value")

// Get cookie
Cookies.get("key")

// Get cookie + JSON.parse
Cookies.get("key", true)

// Trigger update manually
Cookies.triggerUpdate()
```

## TODO

* [ ] Fix cookies parsing
* [ ] Add cookie options (expire date, path etc)

## License

MIT
