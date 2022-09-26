import DomListener from './DomListener'

export default class CasinoComponent extends DomListener {
  constructor($root, options) {
    super($root, options.listeners)
    this.components = options.components || []
    this.emitter = options.emitter
    this.store = options.store
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  $on(event, fn) {
    this.emitter.subscribe(event, fn)
  }
  $changeStore(mutation, val) {
    this.store.mutations[mutation](val)
  }
  init() {
    this.initDomListeners()
  }
}
