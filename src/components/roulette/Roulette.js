import CasinoComponent from '@core/CasinoCopmonent'
import {createRoulette} from './roulette.template'
import {rouletteRotate} from './rouletteRotate'

export default class Roulette extends CasinoComponent {
  static className = 'casino__roulette'

  constructor($root, options) {
    super($root, {
      name: 'Roulette',
      listeners: [],
      ...options
    })
    this.lastBet = this.store.state.bet
  }

  toHtml() {
    return createRoulette()
  }

  init() {
    super.init()
    this.$on('store:inGameChanged', async (val) => {
      if (val) {
        this.lastBet = this.store.state.bet ?
          this.store.state.bet : this.lastBet
        const promise = new Promise((resolve) => {
          rouletteRotate(this.$root, resolve)
        })
        const winPoints = await promise
        this.$changeStore('money', winPoints * this.lastBet)
        if (winPoints) {
          this.$changeStore('bet', this.lastBet)
        }
        this.$changeStore('inGame')
      }
    })
  }
}
