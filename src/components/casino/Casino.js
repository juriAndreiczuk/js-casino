import {$} from '@core/dom'
import {Emitter} from '@core/Emitter'
import Store from '@core/store'

export default class Casino {
  constructor(options) {
    this.components = options.components
    this.$root = $(options.root)
    this.emitter = new Emitter()
    this.store = new Store(this.emitter)
  }

  getHtml() {
    const componentArguments = {
      emitter: this.emitter,
      store: this.store
    }
    const $root = $.create('div', 'casino')

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, componentArguments)
      $root.append($el)
      $el.html(component.toHtml())
      return component
    })
    return $root
  }
  render() {
    this.$root.append(this.getHtml())
    this.components.forEach(component => component.init())
  }
}
