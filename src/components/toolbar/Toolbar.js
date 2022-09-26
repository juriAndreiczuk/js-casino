import CasinoComponent from '@core/CasinoCopmonent'
import {createToolbar} from './toolbar.template'
import {$} from '@core/dom'

export default class Toolbar extends CasinoComponent {
  static className = 'casino__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    })
  }

  toHtml() {
    return createToolbar()
  }

  init() {
    super.init()
    this.$on('store:inGameChanged', val => {
      this.$root
        .css({opacity: val ? '.7' : '1'})
        .findAll('button')
        .forEach(el => $(el).css({pointerEvents: val ? 'none' : 'all'}))
    })
    this.$on('store:gameOverChanged', val => {
      this.$root.find('.casino__toolbar-game')
        .css({display: val ? 'none' : 'flex'})
      this.$root.find('.casino__toolbar-finish')
        .css({display: val ? 'flex' : 'none'})
    })
  }
  onClick(event) {
    const eventData = $(event.target).data
    if (eventData.type === 'bet') {
      const betChange = eventData.bet === 'up'
        ? 1 : -1
      this.$changeStore('bet', betChange)
    } else if (eventData.type === 'start') {
      if (this.store.state.money > 0) {
        this.$changeStore('inGame')
        this.$changeStore('money')
      }
    } else if (eventData.type === 'restart') {
      this.$changeStore('gameOver')
      this.$changeStore('money', 10)
      this.$changeStore('bet', 5)
    }
  }
}
