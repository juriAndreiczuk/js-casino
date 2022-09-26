import {methodName} from './utils'

export default class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root
    this.listeners = listeners
  }
  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = methodName(listener)
      if (listener) {
        this[method] = this[method].bind(this)
        this.$root.on(listener, this[method])
      }
    })
  }
}
