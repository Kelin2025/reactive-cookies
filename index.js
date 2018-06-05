module.exports = function ReactiveCookies(options) {
  options = options || {}
  this.store = document.cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      return acc
    }, {})
  this.listeners = []
  setInterval(this.triggerUpdate, options.interval || 60000)
}

ReactiveCookies.prototype.set = function(key, value) {
  this.store[key] = JSON.stringify(value)
  this.triggerUpdate()
}

ReactiveCookies.prototype.get = function(key, json) {
  return json ? JSON.parse(this.store[key]) : this.store[key]
}

ReactiveCookies.prototype.triggerUpdate = function() {
  document.cookie = JSON.stringify(this.store)
  var store = this.store
  this.listeners.forEach(function(cb) {
    cb(store)
  })
}

ReactiveCookies.prototype.subscribe = function(cb) {
  this.listeners.push(cb)
}

ReactiveCookies.prototype.unsubscribe = function(cb) {
  var idx = this.listeners.indexOf(cb)
  if (idx > -1) {
    this.listeners.splice(idx, 1)
  }
}
